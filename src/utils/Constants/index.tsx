export enum BottomTabNavigationEnum {
  HOME = "Home",
  MESSAGE = "MESSAGE",
  NOTIFICATION = "NOTIFICATION",
  POST = "POST",
  PROFILE = "PROFILE",
}

export type StoryType = {
  id: number;
  story_url: string;
  watched_status: boolean;
  time?: string;
  username?: string;
};

const STORY_ARRAY: StoryType[] = Array.from({ length: 20 }, (_, index) => ({
  id: Math.random(),
  story_url: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
  watched_status: false,
}));

export { STORY_ARRAY };

export type POSTS_DATA_TYPE = {
  id: number | string;
  images: string[];
  publishDate: string;
  title: string;
  description: string;
  author: string;
  username: string;
  likes: string;
  comments: string;
  readTime?: string | undefined;
  author_image?: string;
};

export const POSTS_DATA: POSTS_DATA_TYPE[] = [
  {
    id: 453,
    author_image: "https://randomuser.me/api/portraits/men/1.jpg",
    images: [
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Make design systems people want to use.",
    description: "Lifestyle is the unique expression of an individual's or a ",
    author: "Kim jones",
    username: "_kim",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 123,
    author_image: "https://randomuser.me/api/portraits/men/2.jpg",

    images: [
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Kim jones",
    username: "_kim",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 76,
    author_image: "https://randomuser.me/api/portraits/men/4.jpg",

    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time.",
    author: "Kim jones",
    username: "_kim",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 43,
    author_image: "https://randomuser.me/api/portraits/men/3.jpg",
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Kim jones",
    username: "_kim",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 902,
    author_image: "https://randomuser.me/api/portraits/men/9.jpg",
    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Kim jones",
    username: "_kim",
    likes: "14,30,978",
    comments: "5.5k",
  },
  // {
  //   id: 53,
  //   images: [
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  // {
  //   id: 761,
  //   images: [
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  // {
  //   id: 861,
  //   images: [
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  // {
  //   id: 98,
  //   images: [
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  // {
  //   id: 7690,
  //   images: [
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  // {
  //   id: 998,
  //   images: [
  //     'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   ],
  //   publishDate: '3 feb',
  //   title: 'Make design systems people want to use.',
  //   description:
  //     "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
  //   author: 'Kim jones',
  //   username: '_kim',
  //   likes: '14,30,978',
  //   comments: '5.5k',
  // },
  {
    id: 999,
    author_image: "https://randomuser.me/api/portraits/men/5.jpg",

    images: [
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    title: "Become master in color palette.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Andy Sam",
    username: "_andy",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 710,
    author_image: "https://randomuser.me/api/portraits/men/6.jpg",

    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    readTime: "05 min read",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Candy Parle",
    username: "_candy",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 458,
    author_image: "https://randomuser.me/api/portraits/men/7.jpg",

    images: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    readTime: "05 min read",
    title: "Become master in color palette.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "John Snow",
    username: "_iamjohn",
    likes: "14,30,978",
    comments: "5.5k",
  },
  {
    id: 76190,
    author_image: "https://randomuser.me/api/portraits/men/8.jpg",

    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1495695911455-19054a55f92f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1698117060307-f112d36bb4d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    publishDate: "3 feb",
    readTime: "05 min read",
    title: "Make design systems people want to use.",
    description:
      "Lifestyle is the unique expression of an individual's or a community's way of life. It is the sum of choices and routines that define how one spends their time, what they value, and how they engage with the world around them. From daily habits and recreational pursuits to social connections and personal values, lifestyle is a dynamic concept that evolves over time. Whether it involves a commitment to health and fitness, a passion for travel and exploration, or a focus on work-life balance, each person's lifestyle is a narrative that reflects their journey and aspirations",
    author: "Ross Geller",
    username: "_ross",
    likes: "14,30,978",
    comments: "5.5k",
  },
];

export const userStories: StoryType[] = [
  {
    id: 1,
    username: "_kim",
    time: "9:24 AM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1623838804048-d820eccdd088?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    username: "_andy",
    time: "6:30 AM",
    watched_status: false,
    story_url:
      "https://plus.unsplash.com/premium_photo-1684979566004-9d330d68844a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    username: "_iamjohn",
    time: "2:24 PM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1600058644231-c99658f408ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    username: "_candy",
    time: "10:45 PM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1587984584042-dcc9ba27e054?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    username: "rich_1",
    time: "6:12 AM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1619484830529-b06123fbdbd8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    username: "@goodlyf",
    time: "4:45 PM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1612387290123-34af734b5f61?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    username: "_kim",
    time: "7:05 PM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1621184078903-6bfe9482d935?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    username: "_andy",
    time: "3:45 PM",
    watched_status: false,
    story_url:
      "https://images.unsplash.com/photo-1613389760779-a2541566e0b6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
  },
];

// export const instaUsers = [
//   {
//     id: '456',
//     userPicURL: require('./assets/images/user1.webp'),
//     username: '_kim',
//     email: 'kim@gmail.com',
//     followers: '1700',
//     following: '26',
//     fullName: 'Kim jones',
//   },
//   {
//     id: '789',
//     userPicURL: require('./assets/images/user2.jpg'),
//     username: '_andy',
//     email: 'andy@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Andy Sam',
//   },
//   {
//     id: '123',
//     userPicURL: require('./assets/images/user3.webp'),
//     username: '_iamjohn',
//     email: 'john@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'John Snow',
//   },
//   {
//     id: '234',
//     userPicURL: require('./assets/images/user4.webp'),
//     username: '_candy',
//     email: 'candy@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Catty Parle',
//   },
//   {
//     id: '678',
//     userPicURL: require('./assets/images/user5.jpeg'),
//     username: '_ross',
//     email: 'ross@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Ross Geller',
//   },
//   {
//     id: '101',
//     userPicURL: require('./assets/images/user4.webp'),
//     username: '@goodlyf',
//     email: 'gunter@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Gunter Luis',
//   },
//   {
//     id: '556',
//     userPicURL: require('./assets/images/user5.jpeg'),
//     username: 'rich_1',
//     email: 'richel@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Richel Marshel',
//   },
//   {
//     id: '123',
//     userPicURL:
//       'https://geekyants.com/_next/image/?url=https%3A%2F%2Fstatic-cdn.geekyants.com%2Fuser%2F327%2F2022-09-04%2F166229340977483.jpg&w=2048&q=75',
//     username: '_anupam',
//     email: 'anupam@gmail.com',
//     followers: '1800',
//     following: '25',
//     fullName: 'Anupam Saha',
//   },
// ];
