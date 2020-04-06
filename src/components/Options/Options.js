import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Options.styles';

const Options = ({style, options = []}) => {
  const [open, setOpen] = useState(false);

  const handleOptionsVisibility = () => setOpen(!open);

  const handleOptionPress = optionOnPress => {
    optionOnPress();
    handleOptionsVisibility();
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.optionsContainer}
        onPress={handleOptionsVisibility}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </TouchableOpacity>
      {open && (
        <View style={styles.options}>
          {options.map((option, key) => (
            <TouchableOpacity
              key={key}
              onPress={() => handleOptionPress(option.onPress)}>
              <View style={styles.option}>
                <Text style={styles.optionText}>{option.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Options;
