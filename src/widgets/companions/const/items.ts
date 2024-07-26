type Social = {
  icon: string;
  link: string;
};

type Item = {
  img: string;
  name: string;
  specialty: string;
  info: string;
  socials: Social[];
};

export const companions: Item[] = [
  {
    img: 'Eugene',
    name: 'Евгений Викторов',
    specialty: 'UI/UX Дизайнер',
    info: 'Создаю интересные дизайн проекты на ваш вкус.',
    socials: [
      { icon: 'telegram', link: 'https://t.me/byxaho4ka' },
      { icon: 'vk', link: 'https://vk.com/byxaho4ka' },
    ],
  },
  {
    img: 'Rodion',
    name: 'Родион Коваленко',
    specialty: 'Frontend разработчик',
    info: 'Делаю все, буквально все что хотите.',
    socials: [
      { icon: 'github', link: 'https://github.com/clownlessmode' },
      { icon: 'telegram', link: 'https://t.me/PurpleTooth' },
      { icon: 'vk', link: 'https://vk.com/prpltth' },
    ],
  },
  {
    img: 'Denis',
    name: 'Денис Николаенко',
    specialty: 'Frontend разработчик',
    info: 'Cоздаю веб-сайты, которые сочетают в себе технологии и креативность.',
    socials: [
      { icon: 'github', link: 'https://github.com/disa4148' },
      { icon: 'telegram', link: 'https://t.me/disa159' },
      { icon: 'website', link: 'https://disa-personal-website.vercel.app/' },
    ],
  },
];
