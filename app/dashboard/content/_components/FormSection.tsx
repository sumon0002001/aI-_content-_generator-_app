"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate }: PROPS) => {
  const [formData, setFormData] = useState<any>("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 mt-4 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-300 text-sm">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={formSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                />
                <label className="text-xs text-gray-400">
                  Note: Max 2000 words
                </label>
              </>
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6">
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
