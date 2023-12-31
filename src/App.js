import { ChangeEvent, FC, useState } from 'react';
import { InputText } from 'primereact/inputtext';

import './style.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

export const App: FC = () => {
    const [value, setValue] = useState('');
    return (
        <main>
            <h1>Playground</h1>
            <InputText
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                }
            />
            <p>{value}</p>
        </main>
    );
};
