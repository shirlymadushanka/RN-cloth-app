import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Chip} from "../components";
import {COLORS, IMAGES, PADDING, RADIUS} from "../constants";
import {DIMENSIONS} from "../constants/Sizes";

const HomeScreen = () => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.filledButton}>
          <Ionicons name="grid" size={25} color="white" />
        </View>
        <View style={styles.NotFilledButton}>
          <Ionicons name="search" size={25} />
        </View>
        <View style={styles.NotFilledButton}>
          <Ionicons name="options" size={25} />
        </View>
      </View>
    );
  };

  const renderCategoryScroller = () => {
    const categories = [
      {
        name: "All",
        isActive: true,
      },
      {
        name: "Jackets",
        isActive: false,
      },
      {
        name: "Hoodies",
        isActive: false,
      },
      {
        name: "T-shirt",
        isActive: false,
      },
      {
        name: "Shorts",
        isActive: false,
      },
      {
        name: "Skirt",
        isActive: false,
      },
      {
        name: "Jeans",
        isActive: false,
      },
    ];
    return (
      <ScrollView
        style={styles.categoryScrollerContainer}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {categories.map((category, idx) => (
          <Chip key={idx} title={category.name} isActive={category.isActive} />
        ))}
      </ScrollView>
    );
  };

  const renderRecommandedSection = () => {
    const recommandedProducts = [
      {
        title: "Red Jacket",
        price: "USD120",
        image: IMAGES.IMG1,
      },
      {
        title: "Brown Jacket",
        price: "USD150",
        image: IMAGES.IMG2,
      },
      {
        title: "Dennim",
        price: "USD175",
        image: IMAGES.IMG3,
      },
    ];
    return (
      <View>
        <Text style={styles.recommandedTitle}>Recommanded for you</Text>
        <Text style={styles.recommandedSubtitle}>Based on Search</Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, marginVertical: PADDING.DEFAULT}}>
          {recommandedProducts.map((product, i) => {
            return (
              <View
                key={i}
                style={{...styles.card, marginRight: PADDING.DEFAULT}}>
                <View style={{flex: 1, backgroundColor: "red", width: "100%"}}>
                  <Image
                    source={product.image}
                    style={{width: "100%", height: "100%", resizeMode: "cover"}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: PADDING.DEFAULT,
                  }}>
                  <Text style={{fontSize: 16}}>{product.title}</Text>
                  <Text style={{fontSize: 16, fontWeight: "800"}}>
                    {product.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView scrollEventThrottle={16}>
        {renderCategoryScroller()}
        {renderRecommandedSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING.DEFAULT,
    paddingTop: PADDING.DEFAULT,
    backgroundColor: COLORS.DEFAULT_SECONDARY_COLOR,
  },
  headerContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  filledButton: {
    padding: PADDING.DEFAULT,
    width: 50,
    height: 50,
    backgroundColor: COLORS.DEFAULT_PRIMARY_COLOR,
    borderRadius: RADIUS.LARGE,
    justifyContent: "center",
    alignItems: "center",
    marginRight: "auto",
  },
  NotFilledButton: {
    padding: PADDING.DEFAULT,
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: COLORS.DEFAULT_SECONDARY_COLOR,
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_PRIMARY_COLOR_LIGHT,
    borderRadius: RADIUS.LARGE,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryScrollerContainer: {
    paddingVertical: PADDING.DEFAULT,
  },
  recommandedTitle: {
    fontWeight: "600",
    fontSize: 20,
  },
  recommandedSubtitle: {
    fontWeight: "300",
    fontSize: 14,
    color: COLORS.TEXT_DISABLE,
    paddingBottom: PADDING.SMALL,
  },
  card: {
    width: (DIMENSIONS.WIDTH - PADDING.DEFAULT * 3) / 2,
    height: 250,
    borderRadius: RADIUS.DEFAULT,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.DEFAULT_PRIMARY_COLOR_LIGHT,
  },
});
