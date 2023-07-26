import FeatureLeftComponent from './FeatureLeftComponent'
import FeatureRightComponent from './FeatureRightComponent'

const FeaturePostsComponent = () => {
  return (
      <section id='feature' className='my-32 mx-20 flex gap-8 w-full justify-center'>
        <FeatureLeftComponent />
        <FeatureRightComponent />
      </section>
  )
}

export default FeaturePostsComponent
