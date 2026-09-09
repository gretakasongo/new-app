import React, {useEffect, useRef, type ReactNode} from 'react';
import {Animated, Easing, Pressable, View, type StyleProp, type ViewStyle} from 'react-native';

// From https://reactnative.dev/docs/animations
interface FadeInterviewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({ children, style }: FadeInterviewProps) =>{
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start();
  },[fadeAnim])

  return(
    <Animated.View style={[
      style,
      { opacity: fadeAnim },
    ]}>
      {children}
    </Animated.View>
  );
};
export function SlideIn({ children }: { children: ReactNode }) {
  const t = useRef(new Animated.Value(40)).current;
  const o = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(t, {
        toValue: 0,
        duration: 450,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true
      }),
      Animated.timing(o, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: t }], opacity: o }}>
      {children}
    </Animated.View>
  );
};
export function SpringPop ({ children }: { children: ReactNode }) {
  const s = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(s, {
      toValue: 1,
      friction: 5,
      tension: 120,
      useNativeDriver: true
    }).start();
  }, []);
  return <Animated.View style={{ transform: [{ scale: s }] }}>{children}</Animated.View>;
  
}
// On feedback
export function PressScale({ children, onPress }: { children: ReactNode; onPress: () => void }) {
  const s = useRef(new Animated.Value(1)).current;

  const down = () => Animated.spring(s, { toValue: 0.95, useNativeDriver: true }).start();
  const up = () => Animated.spring(s, { toValue: 1,friction: 6, useNativeDriver: true }).start();
  return (
    <Pressable onPressIn={down} onPressOut={up} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale: s }] }}>{children}</Animated.View>
    </Pressable>
  );

}
export default FadeInView;