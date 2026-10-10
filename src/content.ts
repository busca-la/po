/**
 * Fontes fotográficas públicas consultadas em outubro de 2026.
 * Direitos autorais e marcas pertencem aos respectivos titulares.
 * URLs externas podem sofrer alterações pelos provedores.
 */
export type Photo = {
  src: string
  fallback?: string
  alt: string
}

export const photos = {
  hero: {
    src: 'https://images-porsche.imgix.net/-/media/8FDA264424C24DFFA79F6D57E30645D3_6D4A8D59429B428C9860F92CCB1FA509_036-easy-model-selector_4-3_1200x900_911GT3RS-992_05?auto=format&crop=faces%2Centropy%2Cedges&h=900&q=85&w=1200',
    fallback: 'https://assets.porsche.com/ca/quebec/-/media/Project/DealerWebsites/Canada/Quebec/Nouvelles/2022/911-GT3-Touring-2022/911-GT3-Touring-2022-3.jpg?rev=-1',
    alt: 'Porsche 911 GT3 RS escuro fotografado de perfil durante o pôr do sol',
  },
  carrera: {
    src: 'https://assets.porsche.com/ca/quebec/-/media/Project/DealerWebsites/Canada/Quebec/Nouvelles/2022/911-GT3-Touring-2022/911-GT3-Touring-2022-3.jpg?rev=-1',
    fallback: 'https://images-porsche.imgix.net/-/media/8FDA264424C24DFFA79F6D57E30645D3_6D4A8D59429B428C9860F92CCB1FA509_036-easy-model-selector_4-3_1200x900_911GT3RS-992_05?auto=format&crop=faces%2Centropy%2Cedges&h=900&q=85&w=1200',
    alt: 'Porsche 911 escuro visto de frente em estrada rodeada por montanhas',
  },
  taycan: {
    src: 'https://porsche-bucuresti.ro/assets/web/images/modele/Taycan/taycan-4-black-edition-side-desktop.webp',
    fallback: 'https://images6.alphacoders.com/116/1164442.jpg',
    alt: 'Porsche Taycan Black Edition preto fotografado de perfil',
  },
  cayenne: {
    src: 'https://images-porsche.imgix.net/-/media/8BA8303734EF4CEDB2C296645E7FC565_CF213EA0CC0142FAB072312DFE7E4F73_cayenne-black-edition-desktop?auto=format&q=85&w=1299',
    fallback: 'https://porschepictures.flowcenter.de/pmdb/thumbnail.cgi?crop=1&cs=e00252069164dc95&h=812&id=241086&public=1&w=1440',
    alt: 'Porsche Cayenne Black Edition preto visto de perfil',
  },
  nocturne: {
    src: 'https://images.unsplash.com/photo-1715733965804-88ae4496f29a?auto=format&fit=crop&w=1800&q=85',
    fallback: 'https://assets.porsche.com/ca/quebec/-/media/Project/DealerWebsites/Canada/Quebec/Nouvelles/2022/911-GT3-Touring-2022/911-GT3-Touring-2022-3.jpg?rev=-1',
    alt: 'Traseira de um Porsche 911 preto à noite com faixa de luz vermelha acesa',
  },
  taycanCity: {
    src: 'https://cassette.sphdigital.com.sg/image/thepeak/d7564c9da6f33819e66b63b79a1a2aea7b2751940f2b3d8c13efe357297a40d6',
    fallback: 'https://porsche-bucuresti.ro/assets/web/images/modele/Taycan/taycan-4-black-edition-side-desktop.webp',
    alt: 'Porsche Taycan prateado fotografado em cobertura urbana ao anoitecer',
  },
  cayenneRoad: {
    src: 'https://porschepictures.flowcenter.de/pmdb/thumbnail.cgi?crop=1&cs=e00252069164dc95&h=812&id=241086&public=1&w=1440',
    fallback: 'https://images-porsche.imgix.net/-/media/8BA8303734EF4CEDB2C296645E7FC565_CF213EA0CC0142FAB072312DFE7E4F73_cayenne-black-edition-desktop?auto=format&q=85&w=1299',
    alt: 'Porsche Cayenne prata em movimento diante de montanhas nevadas',
  },
} satisfies Record<string, Photo>

export const models = [
  {
    number: '01',
    name: '911',
    fullName: 'Porsche 911',
    category: 'O ícone',
    description: 'Uma silhueta inconfundível. A expressão mais pura de uma história feita para quem sente cada curva.',
    image: photos.carrera,
  },
  {
    number: '02',
    name: 'Taycan',
    fullName: 'Porsche Taycan',
    category: 'O futuro',
    description: 'A emoção encontra uma nova forma de existir. Design progressivo, caráter inconfundível.',
    image: photos.taycan,
  },
  {
    number: '03',
    name: 'Cayenne',
    fullName: 'Porsche Cayenne',
    category: 'Sem fronteiras',
    description: 'Presença marcante e versatilidade para transformar cada caminho em uma nova experiência.',
    image: photos.cayenne,
  },
]

export const experiences = [
  {
    label: 'Design',
    number: '01',
    kicker: 'Forma com propósito',
    title: 'Cada linha tem uma razão de existir.',
    description: 'Proporções precisas, superfícies esculturais e uma assinatura visual que atravessa gerações.',
    image: photos.hero,
  },
  {
    label: 'Engenharia',
    number: '02',
    kicker: 'Precisão em cada detalhe',
    title: 'A técnica também pode emocionar.',
    description: 'Um encontro entre inovação e tradição, onde cada escolha nasce da busca por uma experiência singular.',
    image: photos.taycanCity,
  },
  {
    label: 'Performance',
    number: '03',
    kicker: 'Feito para sentir',
    title: 'Não se trata apenas de chegar.',
    description: 'O que importa é tudo aquilo que acontece entre a partida e o destino.',
    image: photos.nocturne,
  },
]

export const gallery = [
  { ...photos.hero, tag: '01 / 911', title: 'Luz & silhueta', wide: true },
  { ...photos.nocturne, tag: '02 / 911', title: 'Depois do anoitecer', wide: false },
  { ...photos.taycanCity, tag: '03 / TAYCAN', title: 'Horizontes elétricos', wide: false },
  { ...photos.cayenneRoad, tag: '04 / CAYENNE', title: 'Novos caminhos', wide: false },
  { ...photos.carrera, tag: '05 / 911', title: 'Ícone em movimento', wide: true },
]
