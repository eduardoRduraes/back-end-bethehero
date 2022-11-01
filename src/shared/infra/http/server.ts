import env from "@utils/env";

import { MongoHelper } from "../mongodb/mongo-helper";
import { app } from "./app";

MongoHelper.connect(env.mongoURL)
    .then(() => {
        app.listen(env.port, () =>
            console.log("server is running 🏃🏃🏃🏃 !!!")
        );
    })
    .catch((err) => console.log(err));
