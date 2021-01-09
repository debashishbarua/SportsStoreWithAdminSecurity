import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product";

const PROTOCOL = "http";
const PORT = 8080;
@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products")
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products",
            product, this.getOptions());
    }
    updateProduct(product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,
            product, this.getOptions());
    }
    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`,
            this.getOptions());
    }
    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}products/${id}`,
            this.getOptions());
    }

    auth_token: string;
    authenticate(user: string, pass: string): Observable<any> {
        return this.http.post<any>(this.baseUrl + "login", {
            username: user, password: pass
        })
    }
    clear() {
        this.auth_token = null;
    }
    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
