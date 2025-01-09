
import { Observable } from "rxjs";
import {GetProductRequest, ProductDTO} from '../products.proto';


export interface ProductService {
    getProduct(request: GetProductRequest): Observable<ProductDTO>;
}