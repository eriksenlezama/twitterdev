const timeline = [
  {
    id: '0',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'wongmjane',
    message: 'Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%. (gzipped size went from 16.6 KB down to 2.7 KB!!). * Chrome 79+, Safari 14+, Firefox 68+'
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '2',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    message: 'Abro paraguas Paraguas. Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.'
  },
  {
    id: '3',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'wongmjane',
    message: 'Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%. (gzipped size went from 16.6 KB down to 2.7 KB!!). * Chrome 79+, Safari 14+, Firefox 68+'
  },
  {
    id: '4',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '5',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    message: 'Abro paraguas Paraguas. Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.'
  },
  {
    id: '6',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'wongmjane',
    message: 'Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%. (gzipped size went from 16.6 KB down to 2.7 KB!!). * Chrome 79+, Safari 14+, Firefox 68+'
  },
  {
    id: '7',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '8',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    message: 'Abro paraguas Paraguas. Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.'
  },
  {
    id: '9',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'wongmjane',
    message: 'Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%. (gzipped size went from 16.6 KB down to 2.7 KB!!). * Chrome 79+, Safari 14+, Firefox 68+'
  },
  {
    id: '10',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '11',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    message: 'Abro paraguas Paraguas. Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.'
  },
  {
    id: '12',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'wongmjane',
    message: 'Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%. (gzipped size went from 16.6 KB down to 2.7 KB!!). * Chrome 79+, Safari 14+, Firefox 68+'
  },
  {
    id: '13',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    userName: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán'
  },
  {
    id: '14',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/880793742285742080/ihF2cK2E_400x400.jpg',
    message: 'Abro paraguas Paraguas. Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.'
  }
]

export default function handler (req, res) {
  res.status(200).json(timeline)
}
