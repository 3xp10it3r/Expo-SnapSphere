import {Dimensions, FlatList, ListRenderItem} from 'react-native';
import React from 'react';

interface CarouselI {
  flatListRef: React.LegacyRef<FlatList<any>> | undefined;
  data: ArrayLike<any> | null | undefined;
  renderItem: ListRenderItem<any> | null | undefined;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const onFlatlistSnapToItem = (
  info: {index: React.SetStateAction<number>},
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  setActiveIndex(info.index);
};

const screenWidth = Dimensions.get('window').width;

const Carousel = ({
  flatListRef,
  data: imagesToUpload,
  renderItem,
  setActiveIndex,
}: CarouselI) => {
  return (
    <FlatList
      ref={flatListRef}
      data={imagesToUpload}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={e => {
        const offset = e.nativeEvent.contentOffset.x;
        const index = Math.round(offset / screenWidth);
        onFlatlistSnapToItem({index}, setActiveIndex);
      }}
      keyExtractor={(item, index) => item.fileName || index.toString()}
    />
  );
};

export default Carousel;
