import Head from 'next/head';
import Image from 'next/image';
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import DeckContainer from '../components/DeckContainer';

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [deck, setDeck] = useState([]);

	const toast = useToast();

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const res = await fetch('api/cards');
				const { cards } = await res.json();

				if (res.ok) {
					toast({ title: 'Deck Loaded!', status: 'success', isClosable: true });
					console.log(cards);
					setDeck(cards);
					setIsLoading(false);
				} else {
					toast({
						title: 'Something went wrong',
						status: 'error',
						isClosable: true,
					});
				}
			} catch (err) {}
		};
		fetchCards();
	}, []);

	// const deckCount = 0;

	// const prevCard = () => {
	// 	setCurrentCard((prevState) =>
	// 		prevState === 0 ? deckCount : prevState - 1
	// 	);
	// };

	// const nextCard = () => {
	// 	setCurrentCard((prevState) =>
	// 		prevState === deckCount ? prevState : prevState + 1
	// 	);
	// };

	// const setCard = (slide) => {
	// 	setCurrentCard(slide);
	// };

	// const cardStyles = {
	// 	transition: 'all .5s',
	// 	ml: `-${currentCard * 100}%`,
	// };

	return (
		<VStack p={4}>
			<VStack p={2} maxW={['full', 'xl']}>
				<Heading as='h1'>Welcome to codeCards!</Heading>
				<Text>
					A coding flashcard generator under development to provide a free tool
					for concept reinforcement.
				</Text>
				<Text>
					Further updates will be upcoming, and feel to view the public repo and
					follow for notifications. Thank you
				</Text>
			</VStack>
			{isLoading && (
				<Spinner
					size='xl'
					color='teal.500'
					thickness='0.25rem'
					speed='0.65s'
					emptyColor='gray.700'
				/>
			)}
			{!isLoading && <DeckContainer deck={deck} />}
		</VStack>
	);
}
