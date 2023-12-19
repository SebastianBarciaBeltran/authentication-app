import { Router } from "express";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        //* Example principal routes
        /// router.use('/api/auth', AuthRoutes.routes );
        /// router.use('/api/products', ProductsRoutes.routes );

        return router;
    }
}