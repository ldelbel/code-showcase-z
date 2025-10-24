import sage1 from '/mockImages/sage.jpg';
import sage2 from '/mockImages/sage.jpg';
import warrior1 from '/mockImages/warrior.jpg';
import warrior2 from '/mockImages/warrior.jpg';

export const mockArchetypeData = [
  {
    name: "The Nomadic Dreamweaver",
    description: "Born with the adventurous spirit of Sagittarius, they always have their eye on far-off places. Their intuition and innovative tendencies, drawn from their Aquarius ascendant, often lead them to introduce groundbreaking concepts and ideas. The Libran Moon...Born with the adventurous spirit of Sagittarius, they always have their eye on far-off places. Their intuition and innovative tendencies, drawn from their Aquarius ascendant, often lead them to introduce groundbreaking concepts and ideas. The Libran Moon...",
    virtues: ["Courage", "Strength", "Leadership", "Discipline"],
    images: [
      {
        leonardoId: "leo-123",
        url: warrior1,
        height: 1024,
        width: 1024
      },
      {
        leonardoId: "leo-124",
        url: sage1,
        height: 1024,
        width: 1024
      }
    ]
  },
  {
    name: "The Star-Chasing Harmonizer",
    description: "This archetype derives its main strength from Sagittarius, known for its relentless pursuit of knowledge and experiences. Their fiery spirit is balanced with the progressive intellect of their Aquarius ascendant, prompting them to...This archetype derives its main strength from Sagittarius, known for its relentless pursuit of knowledge and experiences. Their fiery spirit is balanced with the progressive intellect of their Aquarius ascendant, prompting them to...",
    virtues: ["Wisdom", "Knowledge", "Understanding", "Insight"],
    images: [
      {
        leonardoId: "leo-125",
        url: warrior2,
        height: 1024,
        width: 1024
      },
      {
        leonardoId: "leo-126",
        url: sage2,
        height: 1024,
        width: 1024
      }
    ]
  }
]; 