'use client';

import { Box, Container, Heading, Text, Stack, Button, Image, SimpleGrid } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        position="relative"
        height="100vh"
        backgroundImage="url('/images/hotel-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bg="blackAlpha.600"
        />
        <Container maxW="container.xl" height="100%" position="relative">
          <Stack
            height="100%"
            justifyContent="center"
            spacing={6}
            color="white"
          >
            <Heading as="h1" size="2xl">
              Green Hotel on the Waves
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Experience luxury in harmony with nature. Our 5-star eco-hotel harnesses the power of waves,
              sun, wind, and tides to create a sustainable paradise.
            </Text>
            <Button
              size="lg"
              colorScheme="green"
              width="fit-content"
            >
              Book Your Stay
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <Stack spacing={12}>
            <Stack textAlign="center" spacing={4}>
              <Heading>Sustainable Luxury</Heading>
              <Text>Where comfort meets environmental responsibility</Text>
            </Stack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                {
                  title: "Wave Energy",
                  description: "Powered by ocean waves",
                  icon: "🌊"
                },
                {
                  title: "Solar Power",
                  description: "Harnessing the sun's energy",
                  icon: "☀️"
                },
                {
                  title: "Wind Energy",
                  description: "Utilizing coastal winds",
                  icon: "💨"
                },
                {
                  title: "Tidal Power",
                  description: "Synchronized with nature's rhythm",
                  icon: "🌊"
                }
              ].map((feature, index) => (
                <Stack
                  key={index}
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                  spacing={4}
                >
                  <Text fontSize="4xl">{feature.icon}</Text>
                  <Heading size="md">{feature.title}</Heading>
                  <Text>{feature.description}</Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 