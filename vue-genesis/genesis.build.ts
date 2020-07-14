import path from 'path';
import fs from 'fs';
import { Build } from '@fmfe/genesis-compiler';
import { ssr } from './genesis';

const start = async () => {
    /**
     * Create a compiled instance
     */
    const build = new Build(ssr);
    /**
     * Start executing the compiler and build the production environment application package
     */
    await build.start();
    /**
     * After the compilation is complete, create a renderer that outputs the content required by the remote component
     */
    const renderer = ssr.createRenderer();
    /**
     * CSR rendering output JSON
     */
    const result = await renderer.render({ mode: 'csr-json' });
    /**
     * Save JSON to client directory
     */
    fs.writeFileSync(
        path.resolve(ssr.outputDirInClient, 'app.json'),
        JSON.stringify(result.data, null, 4),
        'utf8'
    );
};
start();
