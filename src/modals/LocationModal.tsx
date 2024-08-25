import axios from 'axios';
import { SearchNormal1 } from 'iconsax-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  View
} from 'react-native';
import {
  ButtonComponent,
  InputComponent,
  RowComponent,
  SpaceComponent,
  TextComponent,
} from '../components';
import { appColors } from '../constants/appColors';
import { LocationModel } from '../models/LocationModel';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelect: (val: string) => void;
}

const LocationModal = (props: Props) => {
  const { visible, onClose, onSelect } = props;
  const [searchKey, setSearchKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState<LocationModel[]>([]);

  const handleClose = () => {
    onClose();
  };

  const handleSearchLocation = async () => {
    const api = `https://autocomplete.search.hereapi.com/v1/
    autocomplete
    ?q=${searchKey}
    &limit=10
    &apiKey={API_KEY}`;

    try {
      setIsLoading(true);
      const res = await axios.get(api);

      if (res && res.data && res.status === 200) {
        setLocation(res.data.item);
      }

      console.log(location);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal animationType="fade" visible={visible} style={{ flex: 1 }}>
      <View style={{ paddingVertical: 42, paddingHorizontal: 20 }}>
        <RowComponent justify="flex-end" styles={{ marginVertical: 20 }}>
          <View style={{ flex: 1 }}>
            <InputComponent
              affix={<SearchNormal1 size={20} color={appColors.gray} />}
              value={searchKey}
              onChange={(val) => setSearchKey(val)}
              placeholder="Search"
              styles={{ marginBottom: 0 }}
              allowClear
              onEnd={handleSearchLocation}
            />
          </View>

          <SpaceComponent width={12} />

          <ButtonComponent text="Cancel" type="link" onPress={handleClose} />
        </RowComponent>

        <View style={{ flex: 1 }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : location.length > 0 ? (
            <FlatList
              data={location}
              renderItem={({ item }) => (
                <>
                  <TextComponent text={item.address.city} />
                </>
              )}
            />
          ) : (
            <View>
              <TextComponent text={searchKey ? "Location not found" : "Search location"} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
