import {Container} from 'components/GlobalComponents';
import React, {ChangeEvent, useState} from 'react';
import {Input} from './styles';

interface SearchInputProps {
    label: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const SearchInput = ({label, onChange, placeholder}: SearchInputProps) => {
    const [value, setValue] = useState('');
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <Container>
            <p>{label}</p>
            <Input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
        </Container>
    );
};

export default SearchInput;
