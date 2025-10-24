import { useFetchConceptImage } from '@/api/hooks';
import { useImageModal } from '@/hooks/useImageModal';
import CopyIcon from '@/shared/Icons/CopyIcon';
import DownloadIcon from '@/shared/Icons/DownloadIcon';
import ShareIcon from '@/shared/Icons/ShareIcon';
import LoadingSpinner from '@/shared/LoadingSpinner';
import { useUserStore } from '@/store/useStore';
import { getConceptShareText } from '@/utils/getConceptShareText';
import { lang } from '@/utils/lang';
import { UseQueryResult } from '@tanstack/react-query';
import { UserConceptData } from '@zodic/shared/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const translations = {
  'pt-br': {
    downloads: 'Downloads',
    tiktokReels: 'TIKTOK/IG REELS',
    igFeed: 'Instagram Feed',
    copyDescription: 'Copiar a descrição',
    copied: 'Copiado!',
    shareNotSupported: 'Compartilhamento não suportado neste navegador',
    shareError: 'Não foi possível compartilhar:',
    downloadError: 'Erro ao baixar a imagem',
    fetchError: 'Erro ao buscar a imagem',
    loading: 'Carregando imagem...',
  },
  'en-us': {
    downloads: 'Downloads',
    tiktokReels: 'TIKTOK/IG REELS',
    igFeed: 'Instagram Feed',
    copyDescription: 'Copy the description',
    copied: 'Copied!',
    shareNotSupported: 'Sharing not supported in this browser',
    shareError: 'Could not share:',
    downloadError: 'Error downloading image',
    fetchError: 'Error fetching image',
    loading: 'Loading image...',
  },
};

const t = translations[lang];

interface ShareProps {
  userConcept: UserConceptData;
}

const Share = ({ userConcept }: ShareProps) => {
  const [showCopied, setShowCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { showImage } = useImageModal();
  const { concepts } = useUserStore();

  const { name, conceptSlug, images, imageIdx } = userConcept;

  let concept = concepts.find((c) => c.slug === conceptSlug);

  if (!concept) {
    concept = concepts.find((c) => c.slug === 'crown');
  }

  const imageUrl =
    images.framed[imageIdx] || images.post[imageIdx] || 'default-image.png';

  const description = getConceptShareText({
    conceptSlug,
    conceptName: name,
    placements: concept?.composition.map((p) => [p.placement, p.sign]) || [],
    lang,
  });

  const { data, error, isLoading, refetch }: UseQueryResult<Blob, Error> =
    useFetchConceptImage(true, conceptSlug);

  useEffect(() => {
    if (error) {
      console.error('Fetch error:', error);
      toast.error(`${t.fetchError} ${error.message}`);
    }
  }, [error]);

  const handleDownload = async () => {
    if (isFetching || isLoading) {
      return;
    }

    setIsFetching(true);
    try {
      await refetch();
      if (error || !data) {
        toast.error(`${t.downloadError} ${error?.message || 'No image data'}`);
        window.open(imageUrl, '_blank');
        console.log('Download failed, opened in new tab. Right-click to save.');
        return;
      }

      const blob = data as Blob;
      console.log('Blob size:', blob.size, 'Type:', blob.type);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${name}-zodic.png`;
      document.body.appendChild(link);

      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      );

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download processing error:', err);
      toast.error(`${t.downloadError} ${(err as Error).message}`);
      window.open(imageUrl, '_blank');
      console.log('Download failed, opened in new tab. Right-click to save.');
    } finally {
      setIsFetching(false);
    }
  };

  const handleShare = async () => {
    if (isFetching || isLoading) {
      return;
    }

    setIsFetching(true);
    try {
      await refetch();
      if (error || !data) {
        toast.error(`${t.shareError} ${error?.message || 'No image data'}`);
        return;
      }

      if (!navigator.share) {
        toast.warn(t.shareNotSupported);
        return;
      }

      const shareData: ShareData = {
        title: name,
        text: description,
        url: 'https://zodic.app',
      };

      const blob = data as Blob;
      const mimeType = blob.type || 'image/jpeg';
      const extension = mimeType.includes('png') ? 'png' : 'jpg';
      const file = new File(
        [blob],
        `zodic-concept-${conceptSlug}.${extension}`,
        {
          type: mimeType,
        }
      );

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        shareData.files = [file];
      } else {
        console.warn('File sharing not supported by navigator.canShare');
      }

      await navigator.share(shareData);
    } catch (err) {
      console.error('Share error:', err);
      if (!(err as Error).message.includes('canceled')) {
        toast.error(`${t.shareError} ${(err as Error).message}`);
      }
    } finally {
      setIsFetching(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        description.concat(' https://zodic.app')
      );
      setShowCopied(true);
      setIsVisible(true);
      setTimeout(() => {
        setShowCopied(false);
        setTimeout(() => setIsVisible(false), 700);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy description');
    }
  };

  const baseWidth = 160;

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: '100%' }}
    >
      <div className="flex gap-5 justify-center items-start mb-8 pt-5">
        {/* Imagem compartilhável + botão share */}
        <div
          className={`w-[${baseWidth}px] aspect-[4/5] p-[1px] bg-golden-gradient rounded-md relative`}
          style={{
            boxShadow: `
                      3px 6px 20px 4px rgba(255, 206, 81, 0.5),
                      -2px -4px 20px 4px rgba(255, 206, 81, 0.5),
                      2px 2px 4px 1px rgba(255, 236, 148, 0.25),
                      -2px 2px 4px 1px rgba(255, 236, 148, 0.25),
                      2px -2px 4px 1px rgba(255, 236, 148, 0.25),
                      -2px -2px 4px 1px rgba(255, 236, 148, 0.25)
                    `,
          }}
        >
          <div
            className={`w-full h-full bg-DarkGray rounded-md`}
            onClick={() => showImage({ url: imageUrl })}
          >
            <div
              className={`w-full h-full bg-cover bg-center`}
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-[50px] h-[30px] bg-golden-gradient rounded-md flex justify-center items-center cursor-pointer"
              style={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)',
              }}
              onClick={handleShare}
            >
              {isFetching || isLoading ? (
                <LoadingSpinner
                  size={3}
                  border={2}
                  borderColor="border-customBrown2"
                />
              ) : (
                <ShareIcon />
              )}
            </div>
          </div>
        </div>
        {/* Área de download */}
        <div className="bg-golden-gradient p-[1px] rounded-md relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <h2
              className="text-oldgoldlight"
              style={{ fontSize: '16px', fontFamily: 'Rajdhani' }}
            >
              {t.downloads}
            </h2>
          </div>
          <div
            className="w-full py-2 rounded-md flex flex-col"
            style={{
              background:
                'radial-gradient(99.16% 99.01% at 90.32% 35.04%, rgba(70, 144, 213, 0) 0%, rgba(8, 48, 75, 0.045) 77.08%, rgba(26, 94, 109, 0.2) 100%)',
              backgroundColor: '#111117',
            }}
          >
            <div className="mx-4 flex flex-col justify-between items-center">
              <p className="text-sm font-rajdhani mb-2">{t.igFeed}</p>
              <div className="w-full flex flex-col items-center gap-2">
                <div className="w-[40px] flex flex-col items-center gap-1">
                  <div className="w-[40px] h-[50px] bg-customGray rounded-sm" />
                  <p className="text-xs font-rajdhani">960x1200</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="w-[41px] h-[25px] bg-golden-gradient rounded-md flex justify-center items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                    style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.75)' }}
                    onClick={handleDownload}
                    aria-label={t.downloadError}
                  >
                    {isFetching || isLoading ? (
                      <LoadingSpinner
                        size={3}
                        border={2}
                        borderColor="border-customBrown2"
                      />
                    ) : (
                      <DownloadIcon />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Descrição e copiar */}
      <div className="my-auto">
        <div
          className="flex items-center justify-center"
          style={{
            boxShadow: `
            inset 0px -3px 4px rgba(0, 0, 0, 0.5),
            inset 0px 3px 5px 1px rgba(0, 0, 0, 0.25)
          `,
          }}
        >
          <div className="bg-DarkGray2 rounded-md px-3 py-4 w-full max-w-md relative">
            <div className="absolute -top-5 left-2">
              <h2 className="text-oldgoldlight text-lg font-semibold">
                {t.copyDescription}
              </h2>
            </div>
            <div
              className="w-[40px] h-[40px] bg-DarkGray2 rounded-md bg-cover bg-center cursor-pointer absolute -top-6 right-1 flex justify-center items-center"
              style={{
                boxShadow: `
                -1px -1px 6px rgba(255, 255, 255, 0.4),
                3px 3px 10px rgba(0, 0, 0, 1)
              `,
              }}
            >
              <div className="relative" onClick={handleCopy}>
                <CopyIcon />
                <div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-whitesmoke px-2 py-1 rounded text-sm"
                  style={{
                    transition: 'opacity 700ms ease-in-out',
                    opacity: showCopied ? 1 : 0,
                    visibility: isVisible ? 'visible' : 'hidden',
                    pointerEvents: 'none',
                  }}
                >
                  {t.copied}
                </div>
              </div>
            </div>
            <p className="text-sm tall:text-base text-whitesmoke text-justify overflow-y-auto">
              {description.concat(' https://zodic.app')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
