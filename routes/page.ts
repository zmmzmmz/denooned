import {Router} from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {index} from '../controller/page.ts'

const router = new Router({
  prefix: '/api/v1/page',
});

router.get('/:id', index);

export default router;