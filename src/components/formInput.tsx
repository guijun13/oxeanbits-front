import { Input } from '@progress/kendo-react-inputs';
import React from 'react';

export default function FormInput({
  labelText,
  type = 'text',
  value,
  onChange,
  required = false,
}: {
  labelText: React.ReactNode;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex my-2">
      <label className="mr-2">{labelText}</label>
      <Input type={type} className="w-40" value={value} onChange={onChange} required={required} />
    </div>
  );
}
