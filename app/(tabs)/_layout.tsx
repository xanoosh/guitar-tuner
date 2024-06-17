import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Homepage',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="guitar"
        options={{
          title: 'Guitar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'musical-notes' : 'musical-notes-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ukulele"
        options={{
          title: 'Ukulele',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'musical-notes' : 'musical-notes-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
