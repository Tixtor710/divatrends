import { Product } from './types';
import { corporateDress } from './corporate-dress';
import { sarees } from './sarees';
import { fabrics } from './fabrics';

export type { Product };
export const products: Product[] = [
  ...corporateDress,
  ...sarees,
  ...fabrics
];