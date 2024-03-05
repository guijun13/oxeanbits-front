import { Input } from '@progress/kendo-react-inputs';
import React from 'react';

export default function FormInput({
  labelText,
  type = 'text',
  value,
  onChange,
}: {
  labelText: React.ReactNode;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex gap-4">
      <label>{labelText}</label>
      <Input type={type} className="w-40" value={value} onChange={onChange} />
    </div>
  );
}
