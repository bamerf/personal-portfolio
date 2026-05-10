type Companies = 'cellebrite' | 'corellium' | 'pay' | 'leadchat' | 'backifi';

type Paths = {
  params: {
    company: Companies;
  };
}[];

export const paths: Paths = [
  { params: { company: 'cellebrite' } },
  { params: { company: 'corellium' } },
  { params: { company: 'pay' } },
  { params: { company: 'leadchat' } },
  { params: { company: 'backifi' } },
];
