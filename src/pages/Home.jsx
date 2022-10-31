import React, { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Form } from '../models';
import {AddProduct} from '../components/ProductSelect'

export function Home() {
return(
  <div>
    Home
    <AddProduct />
  </div>
)
}
