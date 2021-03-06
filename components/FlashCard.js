import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Code from './Code';

const FlashCard = ({
	term,
	definition,
	code,
	tags,
	definitionOpen,
	toggleDefinition,
}) => {
	// TODO Reintroduce code snippets
	// const { term, definition, code, tags } = card;
	// const [definitionOpen, setDefinitionOpen] = useState(false);
	const [snippetOpen, setSnippetOpen] = useState(false);

	const definitionColor = useColorModeValue('gray.600', 'gray.600');
	const snippetColor = useColorModeValue('gray.700', 'gray.500');

	// const toggleDefinition = () => setDefinitionOpen(!definitionOpen);
	const toggleSnippet = () => setSnippetOpen(!snippetOpen);

	return (
		<VStack
			boxSize='full'
			flex='none'
			px={4}
			py={3}
			// bg={useColorModeValue('white', 'gray.700')}
			bg='gray.700'
			rounded='md'
			maxW='xl'
		>
			{/* TODO Add tags
			<Stack direction='row' alignItems='center' alignSelf='flex-start'>
				{tags &&
					tags.map((tag, index) => (
						<Text
							key={index}
							bg={useColorModeValue('blue.200', 'blue.400')}
							color={useColorModeValue('blue.800', 'blue.900')}
							px={2}
							py={1}
							rounded='full'
							textTransform='uppercase'
							fontSize='xs'
						>
							{tag}
						</Text>
					))}
			</Stack> */}
			<VStack py={4}>
				<Heading mt={2} textAlign='center'>
					{term}
				</Heading>
				<AnimatePresence initial={false}>
					{definitionOpen && (
						<motion.div
							layout
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: { opacity: 1, height: 'auto' },
								collapsed: { opacity: 0, height: 0 },
							}}
							transition={{
								duration: 0.8,
								ease: [0.04, 0.62, 0.23, 0.98],
							}}
						>
							<Box
								bg={definitionColor}
								p={4}
								maxW={['100%', null, 'xl']}
								rounded={5}
							>
								<Text>{definition}</Text>
							</Box>
						</motion.div>
					)}
				</AnimatePresence>
				{/* TODO Update Code Snippet Styling
				<AnimatePresence>
					{snippetOpen && (
						<motion.div
							layout
							initial='collapsed'
							animate='open'
							exit='collapsed'
							variants={{
								open: { opacity: 1, height: 'auto' },
								collapsed: { opacity: 0, height: 0 },
							}}
							transition={{
								duration: 0.8,
								ease: [0.04, 0.62, 0.23, 0.98],
							}}
						>
							<Code code={code} />
						</motion.div>
					)}
				</AnimatePresence> */}
			</VStack>
			<Box textAlign='center' my={3}>
				<ButtonGroup>
					<Button colorScheme='teal' color='black' onClick={toggleDefinition}>
						Show more...
					</Button>
					{/* TODO Add once feature is ready
					<Button colorScheme='teal' onClick={toggleSnippet}>
						Code Snippet
					</Button> */}
				</ButtonGroup>
			</Box>
		</VStack>
	);
};

export default FlashCard;
