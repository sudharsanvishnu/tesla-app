import React from "react";
import { Text, View, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";

const CarItem = (props) => {

  const { name, tagline, image, taglineCTA } = props.car;

    return (
        <View style={styles.carContainer}>
        
             <ImageBackground 
                 source={image}
                 style={styles.image}  
              />

          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline} {''}
                <Text style={styles.subtitleCTA}>
                  {taglineCTA}
                </Text>
            </Text>
          </View>      
          
          <View style={styles.buttonsContainer}>
            <StyledButton 
              type = 'primary' 
              content={'custom order'}
              onPress={() => {
              console.warn('primary button was pressed');
              }}
            />
          
            <StyledButton 
              type = 'secondary' 
              content={'Existing inventory'}
              onPress={() => {
              console.warn('seccondary button was presseed');
              }}
            />
          </View>
      
         </View>
    );
};

export default CarItem;