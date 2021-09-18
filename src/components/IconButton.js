import React from "react";
import {View, Text, TouchableNativeFeedback, StyleSheet} from "react-native";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS} from "../constants";

const IconButton = ({
  name,
  size = 25,
  color = COLORS.DEFAULT_SECONDARY_COLOR,
  title,
  titleStyle = {},
  iconStyle = {},
  onPress = () => {},
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name={name} size={size} color={color} style={iconStyle} />
        {title && <Text style={titleStyle}>{title}</Text>}
      </View>
    </TouchableNativeFeedback>
  );
};

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  titleStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  onPress: PropTypes.func,
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.DEFAULT_PRIMARY_COLOR,
  },
});
