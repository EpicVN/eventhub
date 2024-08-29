import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ButtonComponent,
  ContainerComponent,
  DateTimePickerComponent,
  DropdownPickerComponent,
  InputComponent,
  LocationPicker,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../components';
import { authSelector } from '../redux/reducers/authReducer';
import userAPI from '../apis/userApi';

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

  const handleChangeValue = (key: string, value: string | Date) => {
    const items = { ...eventData };
    items[`${key}`] = value;

    setEventData(items);
  };

  const handleAddEvent = async () => {
    const res = await userAPI.HandleUser('/get-all');
    console.log(res);
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

        <RowComponent>
          <DateTimePickerComponent
            type="time"
            onSelect={(val) => handleChangeValue('startAt', val)}
            selected={eventData.startAt}
            label="Start at:"
          />

          <SpaceComponent width={20} />

          <DateTimePickerComponent
            type="time"
            onSelect={(val) => handleChangeValue('endAt', val)}
            selected={eventData.endAt}
            label="End at:"
          />
        </RowComponent>

        <DateTimePickerComponent
          type="date"
          onSelect={(val) => handleChangeValue('date', val)}
          selected={eventData.date}
          label="Date:"
        />

        <DropdownPickerComponent
          label='Invite people'
          values={[]}
          onSelect={(val: string) => {
            console.log(val);
          }}
          selected={undefined}
        />
      </SectionComponent>

      <SectionComponent>
        <ButtonComponent
          text="Add New"
          onPress={handleAddEvent}
          type="primary"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default AddNewScreen;
