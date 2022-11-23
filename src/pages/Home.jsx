import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Form } from "../models";
import { AddProduct } from "../components/ProductSelect";
import { ProductForm } from "../components/ProductForm";

export function Home() {
  return (
    <div>
      Home
      {/* <AddProduct />
      <ProductForm /> */}
    </div>
  );
}
