'use client'

import Carousel from 'better-react-carousel'
import AuthorCarouselItemComponent, { IAuthor } from './AuthorCarouselItemComponent'
const authors: IAuthor[] = [
  {
    name: 'Monchi Pascual',
    role: 'Creador de contenido',
    imageUrl: '/authors/monchi.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/monchi.pascual',
      twitter: 'https://twitter.com/monchipascual',
      instagram: 'https://www.instagram.com/monchipascual/'
    },
  },
  {
    name: 'FranK Freeman',
    role: 'Desarrrollador Web',
    imageUrl: '/authors/frank.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/frank.freeman.7773639',
      twitter: 'https://twitter.com/frankfreeman_',
      instagram: 'https://www.instagram.com/frank.freeman'    
    } 
  },
  {
    name: 'Luis Bello',
    role: 'Diseñador',
    imageUrl: '/authors/luisito.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/luis.bello.754',
      twitter: 'https://twitter.com/luisbello_',
      instagram: 'https://www.instagram.com/luisbello_/'
    },
  },
  {
    name: 'Hermes Alejandro',
    role: 'Creador de contenido',
    imageUrl: '/authors/hermes.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/hermes.alejandro.5',
      twitter: 'https://twitter.com/hermesalejandro',
      instagram: 'https://www.instagram.com/hermesalejandro/'
    }
  },
  {
    name: 'Romel Sarmiento',
    role: 'Creador de contenido',
    imageUrl: '/authors/romel.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/romel.sarmiento.5',
      twitter: 'https://twitter.com/romelsarmiento',
      instagram: 'https://www.instagram.com/romelsarmiento/'
    }
  },
  {
    name: 'Eduardo Gonzalez',
    role: 'Creador de contenido',
    imageUrl: '/authors/eduardo.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/eduardo.gonzalez.754918',
      twitter: 'https://twitter.com/eduardo_gonzal',
      instagram: 'https://www.instagram.com/eduardo_gonzal/'
    }
  },
  {
    name: 'Jose Ramon Fuentes',
    role: 'Creador de contenido',
    imageUrl: '/authors/chemon.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/joseramon.fuentes.5',
      twitter: 'https://twitter.com/joseramonfuen',
      instagram: 'https://www.instagram.com/joseramonfuen/'
    }
  },
  {
    name: 'Reidel Arzuaga',
    role: 'Creador de contenido',
    imageUrl: '/authors/reidel_author.png',
    socialNetworks: {
      facebook: 'https://www.facebook.com/joseramon.fuentes.5',
      twitter: 'https://twitter.com/joseramonfuen',
      instagram: 'https://www.instagram.com/joseramonfuen/'
    }
  }   
]
const AuthorsCarouselComponent = () => {
  return (
    <Carousel cols={4} gap={32} loop>
      {
        authors.map((author: IAuthor, index: number) => (
          <Carousel.Item key={index}>
            <AuthorCarouselItemComponent author={author}  />
          </Carousel.Item>
      ))
      }
    </Carousel>
  )
}

export default AuthorsCarouselComponent