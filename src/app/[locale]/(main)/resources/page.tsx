import {Footer, Header} from '@components/main/shared';
import {Dev} from '@components/main/resources';
import {createMetadata} from '@utils/metadata';

const metadata = createMetadata({
  title: 'Resources | Resen',
  description:
    'Discover a range of downloadable guides, tutorials, and other enriching resources for your benefit.',
  url: '/resources'
});

const Page = (): JSX.Element => (
  <>
    <section>
      <Header
        title='resources'
        subtitle='Your Gateway to Endless Inspiration and Learning'
        description='Explore a world of knowledge with my extensive collection of downloadable resources. From guides to tutorials, my carefully curated selection covers various interests and disciplines, empowering your learning journey.'
      />
    </section>
    <section className='h-full min-h-[40vh]'>
      <Dev
        content={[
          "Thank you for visiting the resource page of my personal portfolio website. I'm thrilled to share that the website is currently undergoing development and exciting updates are in progress.",
          "I'm actively working on bringing you a collection of valuable guides, tutorials, and other resources to enhance your experience. While there are no materials available for download at the moment, rest assured that I am dedicating my efforts to curating a comprehensive library of resources.",
          'I appreciate your patience and understanding during this development phase. Your support motivates me to deliver the best possible materials for you. Please check back soon as I continue to work diligently on expanding the resource page.',
          "If you have any specific requests or suggestions for the type of materials you'd like to see, please don't hesitate to reach out. Your feedback is highly valued as it helps me tailor the content to your needs.",
          'Thank you for your interest, and I look forward to sharing an exceptional collection of resources with you very soon!'
        ]}
      />
    </section>
    <section className='h-full min-h-[12rem] pt-20'>
      <Footer />
    </section>
  </>
);

export {metadata};
export default Page;
