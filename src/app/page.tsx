import HeroComponent from '../components/home/HeroComponent'
import HeroContentComponent from '../components/home/HeroContentComponent'
import FeaturePostsComponent from '../components/home/FeaturePostsComponent'
import AboutUsComponent from '../components/home/AboutUsComponent'
import CategoryComponent from '../components/home/CategoryComponent'
import OurHistoryComponent from '../components/home/OurHistoryComponent'
import AuthorsComponent from '../components/home/AuthorsComponent'
import TestimonialComponent from '../components/home/TestimonialComponent'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroComponent>
        <HeroContentComponent />
      </HeroComponent>
      <FeaturePostsComponent />
      <AboutUsComponent />
      <CategoryComponent />
      <OurHistoryComponent />
      <AuthorsComponent />
      <TestimonialComponent />
    </main>
  )
}
