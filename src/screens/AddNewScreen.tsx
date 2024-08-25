import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  LocationPicker,
  SectionComponent,
  TextComponent,
} from '../components';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/reducers/authReducer';
import { appColors } from '../constants/appColors';

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
  const auth = useSelector(authSelector);
  const [eventData, setEventData] = useState<any>({
    ...initValues,
    authorId: auth.id,
  });

  const handleChangeValue = (key: string, value: string) => {
    const items = { ...eventData };
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
          allowClear
        />

        <InputComponent
          value={eventData.description}
          onChange={(val) => handleChangeValue('description', val)}
          placeholder="Description"
          multiline
          numberOfLine={3}
          allowClear
        />

        <LocationPicker />
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          text='Add New'
          onPress={handleAddEvent}
          type="primary"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default AddNewScreen;
