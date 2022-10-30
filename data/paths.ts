type Comapanies = 'corellium' | 'pay' | 'leadchat' | 'backifi';

type Paths = {
  params: {
    company: Comapanies;
  };
}[];

export const paths: Paths = [
  { params: { company: 'corellium' } },
  { params: { company: 'pay' } },
  { params: { company: 'leadchat' } },
  { params: { company: 'backifi' } },
];
