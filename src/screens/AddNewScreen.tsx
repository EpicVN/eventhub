import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
  ContainerComponent,
  InputComponent,
  SectionComponent,
  TextComponent,
} from '../components';

const initValues = {
  title: '',
  description: '',
  location: {
    locationName: '',
    address: '',
  },
  users: [''],
  authorId: '',
  imageUrl: '',
  startAt: Date.now(),
  endAt: Date.now(),
  date: Date.now(),
};

const AddNewScreen = () => {
  const [eventData, setEventData] = useState<any>(initValues);

  const handleChangeValue = (key: string, value: string) => {
    const items = {...eventData};
    items[`${key}`] = value;

    setEventData(items);
  };

  const handleAddEvent = async () => {
    console.log(eventData);
  };
  return (
    <ContainerComponent isScroll>
      <SectionComponent>
        <TextComponent text="Add new" title />
      </SectionComponent>

      <SectionComponent>
        <InputComponent
          value={eventData.title}
          onChange={(val) => handleChangeValue('title', val)}
          placeholder="Title"
        />

        <InputComponent
          value={eventData.description}
          onChange={(val) => handleChangeValue('description', val)}
          placeholder="Description"
          multiline
          numberOfLine={3}
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default AddNewScreen;
