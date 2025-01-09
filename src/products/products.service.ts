import { Injectable } from '@nestjs/common';
import { of, Observable } from 'rxjs';

import {ProductDTO, GetProductRequest} from './products.proto'


@Injectable()
export class ProductsService {}
