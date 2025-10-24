import { DatePickerBR } from '@/components/ui/date-picker-BR';
import { TimePicker } from '@/components/ui/time-picker';
import { SignupSchemaType } from '@/form/schemas';
import GoldenButton from '@/shared/Button';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import AstroLabels from '@/utils/AstroLabels';
import { lang } from '@/utils/lang';

import { VALID_GENDERS_ARRAY } from '@zodic/shared/types';
import React, { useEffect, useState } from 'react';
import { FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form';

const translations = {
  'pt-br': {
    genderLabel: 'Gênero',
    birthDateLabel: 'Data de Nascimento',
    birthTimeLabel: 'Horário',
    birthLocationLabel: 'Local de Nascimento',
    birthLocationPlaceholder: 'Comece a escrever o nome...',
    loadingText: 'Carregando...',
    prevButton: 'ANTERIOR',
    nextButton: 'PRÓXIMO',
    modalTitle: 'Não sabe sua hora de nascimento?',
    modalText1:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    modalText2:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
    modalButton: 'ENTENDI',
    selectPlaceholder: 'Selecione',
  },
  'en-us': {
    genderLabel: 'Gender',
    birthDateLabel: 'Birth Date',
    birthTimeLabel: 'Birth Time',
    birthLocationLabel: 'Birth Location',
    birthLocationPlaceholder: 'Start typing the name...',
    loadingText: 'Loading...',
    prevButton: 'PREV',
    nextButton: 'NEXT',
    modalTitle: "Don't know your time of birth?",
    modalText1:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    modalText2:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt',
    modalButton: 'GOT IT',
    selectPlaceholder: 'Select',
  },
};

const t = translations[lang === 'pt-br' ? 'pt-br' : 'en-us'];

interface Step3Props {
  watch: UseFormWatch<SignupSchemaType>;
  errors: FieldErrors<SignupSchemaType>;
  setValue: UseFormSetValue<SignupSchemaType>;
  onNext: () => void;
  onPrev: () => void;
  isOAuth: boolean;
}

const Step3: React.FC<Step3Props> = ({
  watch,
  setValue,
  onNext,
  onPrev,
  isOAuth,
}) => {
  const values = watch([
    'gender',
    'birthDate',
    'birthTime',
    'birthLocation',
  ]) as (string | undefined)[];
  const isDisabled = values.some((value) => !value);

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<
    { description: string; place_id: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  console.log('Suggestions', suggestions);

  useEffect(() => {
    if (!query || isSelecting) return;
    setLoading(true);

    const fetchPlaces = async () => {
      if (!query) return;
      setLoading(true);

      try {
        const response = await fetch(
          `/google-places?query=${encodeURIComponent(query)}&language=${
            lang === 'pt-br' ? 'pt-BR' : 'en-US'
          }`,
          {
            headers: {
              'Accept-Language': 'pt-BR',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as any;
        setSuggestions(data.predictions || []);
      } catch (error) {
        console.error('Error fetching Google Places data:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchPlaces, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query, lang]);

  const fetchPlaceDetails = async (placeId: string, description: string) => {
    try {
      setIsSelecting(true);
      const response = await fetch(
        `/place-details?place_id=${placeId}&language=${
          lang === 'pt-br' ? 'pt-BR' : 'en-US'
        }`,
        {
          headers: {
            'Accept-Language': 'pt-BR',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = (await response.json()) as any;
      if (!data.lat || !data.lng) {
        throw new Error('Invalid location data received.');
      }

      setValue('birthLocation', description, { shouldValidate: true });
      setValue('latitude', data.lat);
      setValue('longitude', data.lng);

      setQuery(description);
      setSuggestions([]);
    } catch (error) {
      console.error('Error fetching place details:', error);
    } finally {
      setIsSelecting(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center relative -mt-8">
      <div className="w-full flex flex-col gap-2">
        <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
          {t.genderLabel}
        </label>
        <Select
          value={watch('gender')}
          onValueChange={(value) =>
            setValue('gender', value, { shouldValidate: true })
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t.selectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {VALID_GENDERS_ARRAY.map((gender) => (
              <SelectItem key={gender} value={gender}>
                {AstroLabels[gender][lang]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
              {t.birthDateLabel}*
            </label>
            <DatePickerBR
              value={
                watch('birthDate')
                  ? new Date(watch('birthDate') + 'T00:00:00')
                  : undefined
              }
              onChange={(date) => {
                if (date) {
                  const localDate = new Date(
                    date.getTime() - date.getTimezoneOffset() * 60000
                  );
                  setValue('birthDate', localDate.toISOString().split('T')[0], {
                    shouldValidate: true,
                  });
                } else {
                  setValue('birthDate', '', { shouldValidate: true });
                }
              }}
            />
          </div>
          <div className="w-[100px]">
            <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
              {t.birthTimeLabel}*
            </label>
            <TimePicker
              value={
                watch('birthTime') ? (watch('birthTime') as string) : undefined
              }
              onChange={(time) => {
                setValue('birthTime', time || undefined, {
                  shouldValidate: true,
                });
              }}
              placeholder={t.birthTimeLabel}
            />
          </div>
        </div>
        <label className="block text-left mb-1 bg-golden-gradient-2 bg-clip-text text-transparent">
          {t.birthLocationLabel}*
        </label>
        <div className="relative">
          <input
            type="text"
            className="input-field placeholder:text-whitesmoke w-full"
            placeholder={t.birthLocationPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          {loading && (
            <span className="absolute right-3 top-3 text-xs text-golden">
              {t.loadingText}
            </span>
          )}
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-[#1E1E1E] text-white w-full mt-1 rounded-md shadow-lg">
              {suggestions.map((place) => (
                <li
                  key={place.place_id}
                  className="p-2 hover:bg-[#444] cursor-pointer"
                  onClick={() =>
                    fetchPlaceDetails(place.place_id, place.description)
                  }
                >
                  {place.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex gap-4 mt-10">
        <GoldenButton
          variant="silver-medium"
          text={t.prevButton}
          base="silver"
          onClick={onPrev}
          disabled={isOAuth}
        />
        <GoldenButton
          variant="medium"
          text={t.nextButton}
          base="golden"
          onClick={onNext}
          disabled={isDisabled}
        />
      </div>

      {/* Not in use for now */}
      {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>{t.modalTitle}</DialogTitle>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-6 bg-golden-gradient-2 bg-clip-text text-transparent text-center">
            {t.modalTitle}
          </h3>
          <p className="text-oldgold font-semibold text-justify">
            {t.modalText1}
          </p>
          <p className="text-oldgold font-semibold text-justify">
            {t.modalText2}
          </p>

          <div className="flex justify-center">
            <GoldenButton
              variant="medium"
              text={t.modalButton}
              base="golden"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default Step3;
