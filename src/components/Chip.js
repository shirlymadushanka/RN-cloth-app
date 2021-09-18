import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {COLORS, PADDING, RADIUS} from "../constants";
import PropTypes from "prop-types";

const Chip = ({title, isActive = false}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isActive
          ? COLORS.APP_PRIMARY_COLOR_LIGHT
          : COLORS.BG_DISABLE,
      }}>
      <Text
        style={{
          ...styles.text,
          color: isActive ? COLORS.APP_PRIMARY_COLOR : COLORS.TEXT_DISABLE,
          fontWeight: isActive ? "600" : "400",
        }}>
        {title}
      </Text>
    </View>
  );
};

Chip.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.MEDIUM,
    marginEnd: PADDING.DEFAULT,
    paddingVertical: PADDING.SMALL,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.LARGE,
  },
  text: {
    fontSize: 16,
  },
});
