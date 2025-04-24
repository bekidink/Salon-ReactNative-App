import {
  ColoringIcon,
  FaceIcon,
  HairIcon,
  MsgIcon,
  NailIcon,
  SpaIcon,
  WaxIcon,
} from '~/constants/icons';
import { Featuredbg1, Featuredbg2, FollowBg1, Followbg2, FollowBg3, FollowBg4 } from '~/constants/images';

export const ServiceData = [
  {
    title: 'Haircut',
    icon: HairIcon,
  },
  {
    title: 'Nails',
    icon: NailIcon,
  },
  {
    title: 'Facial',
    icon: FaceIcon,
  },
  {
    title: 'Coloring',
    icon: ColoringIcon,
  },
  {
    title: 'Spa',
    icon: SpaIcon,
  },
  {
    title: 'Waxing',
    icon: WaxIcon,
  },
  {
    title: 'Make Up',
    icon: HairIcon,
  },
  {
    title: 'Message',
    icon: MsgIcon,
  },
];

export const FollowData = [
  {
    img: FollowBg1,
  },
  {
    img: FollowBg3,
  },
  {
    img: FollowBg4,
  },
  {
    img: Followbg2,
  },
];

export const FeaturedData = [
  {
    title: 'Salon de Elegance',
    img: Featuredbg2,
    services: ['Hair', 'Nails', 'Facial'],
    rating: 4.8,
    ratingCount: 3140,
    location: '360 Stillwater Rd. Palm City..',
  },
  {
    title: 'Plush Beauty Lounge',
    img: Featuredbg1,
    services: ['Hair', 'Nails', 'Facial'],
    rating: 4.7,
    ratingCount: 2740,
    location: '2607  Haymond Rocks ..',
  },
];