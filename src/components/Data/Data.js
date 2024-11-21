const Data = [
  {
    id: 1,
    name: "Hocus Pocus",
    plot: "Hocus Pocus is about three witches named Winifred, Sarah, and Mary who were executed in Salem back in 1693. They’re brought backto life in modern-day Salem when a teenager named Max accidentallylights a magical candle. The witches want to steal the life force of children to stay young forever. Max, his little sister Dani, and their friend Allison team up to stop them. With the help of a talking cat named Binx (who's been cursed for centuries), they outsmart the witches.",
    poster_path:
      "https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg",
  },
  {
    id: 2,
    name: "The Blair Witch Project",
    plot: "The Blair Witch Project is a unique horror film that uses    the 'found footage' style to tell a scary story. It follows three    filmmakers who get lost in the woods while looking for the legend of    the Blair Witch. Instead of using many special effects, the movie    creates fear through the atmosphere, strange noises, and what is not    shown. The shaky camera and natural acting make everything feel real    and help build a sense of fear and confusion.",
    poster_path:
      "https://playhousecinema.ca/files/princesscinemas/movie-posters/the_blair_witch_project.jpg",
  },
  {
    id: 3,
    name: "Midsommar",
    plot: "Midsommar is a slow-burn psychological horror film that    follows a woman coping with a deep personal tragedy. She joins her    boyfriend and a group of friends on a trip to a remote Swedish village    for a rare midsummer festival. What begins as a seemingly innocent    cultural experience quickly takes a dark turn as the group begins to    realize the village's customs are far more disturbing than they could    have imagined.",
    poster_path:
      "https://grandillusioncinema.org/wp-content/uploads/2023/06/midsommar.jpg",
  },
  {
    id: 4,
    name: "Coraline",
    plot: "Coraline tells the story of a little girl named CoralineJones who feels dissatisfied with her life. Her family moves into anold house that has been divided into apartments. Coraline discovers asecret door in her new home that leads to an alternate world, whereeverything is more colorful and attractive. However, she soon realizesthat this world is not as perfect as it seems, and she must confrontthe evil Other Mother to save her real parents and herself.",
    poster_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSzQNvFocO73fzZ2_MypyxQXZgeYB6N0B2A&s",
  },
  {
    id: 5,
    name: "Pulp Fiction",
    plot: "Pulp Fiction follows interconnected stories of criminalsin Los Angeles, presented in a non-linear narrative. It features hitmenVincent and Jules, boxer Butch, mob boss Marsellus Wallace, and hiswife Mia. The film explores their violent and humorous encounters,becoming a pop culture icon known for its dialogue, action, andinnovative storytelling.",
    poster_path:
      "https://assets.scriptslug.com/live/img/x/posters/3184/pulp-fiction-1994_2731b11b11.jpg",
  },
  {
    id: 6,
    name: "Don't Breathe",
    plot: "Don't Breathe follows young thieves who target a blindman, believing he’s an easy target. However, they quickly realize he isanything but defenseless. The film blurs moral lines, forcing viewersto question who the real villain is. With effective use of darkness andsilence, it creates a uniquely terrifying experience.",
    poster_path:
      "https://play-lh.googleusercontent.com/Wm4Va45o9oSO1zR8ZADfTc-4bDXwc3UWmuVAjUMbWUtGMwXnfts0-GreLimN_4DN-quW",
  },
  {
    id: 7,
    name: "Hereditary",
    plot: "Hereditary follows the Graham family as they struggle withprofound grief and unsettling secrets after the death of theirmatriarch. Supernatural forces take hold of the family, leading tohorrific events as they uncover their dark legacy, culminating in ashocking and haunting climax.",
    poster_path:
      "https://musicart.xboxlive.com/7/a6e35000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  },
  {
    id: 8,
    name: "Corpse Bride",
    plot: "Corpse Bride tells the story of Victor Van Dort, a shyyoung man who accidentally marries a ghost while practicing his weddingvows in the woods. Taken into the underworld, he learns about theCorpse Bride's sad past and finds himself torn between hisresponsibilities to the living and the connection he feels with her.",
    poster_path:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p36328_p_v10_aj.jpg",
  },
  {
    id: 9,
    name: "Annabelle",
    plot: "Annabelle is a supernatural horror film about a dollpossessed by an evil entity that stalks a family. The film creates anintense and frightening suspense atmosphere, keeping viewers intriguedand on edge throughout the story.",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BNjkyMDU5ZWQtZDhkOC00ZWFjLWIyM2MtZWFhMDUzNjdlNzU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 10,
    name: "Scream 2",
    plot: "Scream 2 follows Sidney Prescott as she navigates collegelife a year after the original murders, only to be pursued by a maskedkiller again. The film explores horror sequel tropes, deliveringsuspense, dark humor, and unexpected twists.",
    poster_path:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20341_p_v8_ab.jpg",
  },
  {
    id: 11,
    name: "A Nightmare on Elm Street",
    plot: "Nightmare on Elm Street follows a group of teenagers    haunted by Freddy Krueger, a killer who attacks them in their dreams.    The film builds dread through creepy dream sequences, making sleep    itself dangerous, and is considered a classic in supernatural horror.",
    poster_path:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8572_p_v8_ad.jpg",
  },
  {
    id: 12,
    name: "Harry Potter",
    plot: "The Harry Potter saga follows a young wizard and his    friends as they face various challenges over the years, ultimately    focusing on Harry's fight against the dark wizard Lord Voldemort, who    seeks to conquer the world.",
    poster_path:
      "https://cms.rhinoshield.app/public/images/ip_page_harry_potter_icon_3b529228e6.jpg",
  },
  {
    id: 13,
    name: "Scary Movie (Series)",
    plot: "The Scary Movie series are comedy films that parody    popular horror movie clichés. With silly humor, slapstick comedy, and    absurd situations, they offer a lighthearted and hilarious take on    iconic films.",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BZGRmMGRhOWMtOTk3Ni00OTRjLTkyYTAtYzA1M2IzMGE3NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 14,
    name: "Night of the Living Dead",
    plot: "Night of the Living Dead follows a group of people trapped    in a farmhouse as they try to survive a horde of undead. The film    inspired modern zombie horror and remains a classic with its    suspenseful story and social commentary.",
    poster_path:
      "https://m.media-amazon.com/images/M/MV5BNmZkNDg2NmMtYTliMy00MjNlLTg1MzUtZDBjMzc3NjI0M2Q4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
];

export default Data;
