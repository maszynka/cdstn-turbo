export interface LLMAnswers {
  gptO1?: string
  dsR1?: string
  sonnet3_5?: string
}

export interface LLMExplanations {
  gptO1?: string
  dsR1?: string
  sonnet3_5?: string
}

export interface Question {
  id: number
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
  llmAnswer?: "Claude" | "OpenAI" | "Deepseek"
  llmAnswers?: LLMAnswers
  llmExplanations?: LLMExplanations
}

export interface Quiz {
  id: number
  title: string
  questions: Question[]
}

export interface Subject {
  id: number
  title: string
  quizzes: Quiz[]
}

export const subjects: Subject[] = [
  {
    id: 1,
    title: "Psychometry",
    quizzes: [
      {
        id: 1,
        title: "Exam 2022",
        questions: [
          {
            id: 1,
            text: "What is the primary purpose of psychometric testing?",
            options: [
              "To diagnose mental disorders",
              "To measure psychological attributes",
              "To prescribe medication",
              "To conduct therapy sessions",
            ],
            correctAnswer: 1,
            explanation:
              "Psychometric testing is primarily used to measure psychological attributes such as intelligence, personality traits, and cognitive abilities.",
            llmAnswer: "Claude",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Psychometric testing is designed to measure and quantify various psychological attributes, providing a standardized way to assess traits, abilities, and characteristics.",
              dsR1: "The main goal of psychometric testing is to objectively measure psychological attributes, such as cognitive abilities, personality traits, and aptitudes, using standardized instruments.",
              sonnet3_5:
                "Psychometric testing aims to quantify and assess psychological characteristics, including intelligence, personality, and various mental abilities, using standardized methods.",
            },
          },
          {
            id: 2,
            text: "Which of the following is NOT a type of reliability in psychometric testing?",
            options: [
              "Test-retest reliability",
              "Internal consistency",
              "Inter-rater reliability",
              "Construct validity",
            ],
            correctAnswer: 3,
            explanation:
              "Construct validity is a type of validity, not reliability. The other options are all types of reliability in psychometric testing.",
            llmAnswer: "OpenAI",
            llmAnswers: {
              gptO1: "3",
              dsR1: "3",
              sonnet3_5: "3",
            },
            llmExplanations: {
              gptO1:
                "Construct validity is a measure of how well a test measures what it claims to measure, which is a type of validity, not reliability. The other options are all forms of reliability in psychometric testing.",
              dsR1: "Construct validity is not a type of reliability but rather a type of validity. It refers to how well a test measures the concept it's designed to measure. The other options listed are all types of reliability in psychometric testing.",
              sonnet3_5:
                "Construct validity is a concept related to test validity, not reliability. It assesses whether a test measures the theoretical construct it's supposed to measure. The other options are all types of reliability measures used in psychometric testing.",
            },
          },
          {
            id: 3,
            text: "What does the term 'standardization' mean in the context of psychometric tests?",
            options: [
              "Making the test easier for everyone",
              "Administering the test in a consistent manner",
              "Comparing scores to a normative sample",
              "Using only multiple-choice questions",
            ],
            correctAnswer: 2,
            explanation:
              "Standardization in psychometric testing refers to the process of comparing an individual's test scores to a normative sample, allowing for meaningful interpretation of the results.",
            llmAnswer: "Deepseek",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Standardization ensures that a test is administered and scored consistently, allowing for fair comparisons between individuals' scores and a normative sample.",
              dsR1: "Standardization in psychometric testing involves establishing consistent procedures for administering and scoring the test, and comparing results to a normative sample for meaningful interpretation.",
              sonnet3_5:
                "Standardization in psychometric tests refers to the process of creating a consistent and controlled testing environment, allowing for objective comparisons of scores against a normative group.",
            },
          },
          {
            id: 4,
            text: "Which statistical measure is commonly used to assess the internal consistency of a psychometric scale?",
            options: ["Pearson's correlation coefficient", "Standard deviation", "Cronbach's alpha", "T-score"],
            correctAnswer: 2,
            explanation:
              "Cronbach's alpha is a widely used measure of internal consistency in psychometric scales, indicating how closely related a set of items are as a group.",
            llmAnswer: "Claude",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Cronbach's alpha is a widely used coefficient of reliability that measures the internal consistency of a psychometric scale by assessing the correlation between different items within the scale.",
              dsR1: "Cronbach's alpha is a common statistical measure used to assess the internal consistency reliability of a psychometric scale.  It indicates how well the items on the scale measure the same underlying construct.",
              sonnet3_5:
                "Cronbach's alpha is a statistical measure used to evaluate the internal consistency of a psychometric scale, reflecting the extent to which items within the scale measure the same construct.",
            },
          },
          {
            id: 5,
            text: "What is the Flynn effect in the context of IQ testing?",
            options: [
              "A decrease in IQ scores over time",
              "An increase in IQ scores over time",
              "The impact of education on IQ scores",
              "The hereditary nature of intelligence",
            ],
            correctAnswer: 1,
            explanation:
              "The Flynn effect refers to the substantial and long-sustained increase in intelligence test scores measured in many parts of the world over the 20th century.",
            llmAnswer: "OpenAI",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "The Flynn effect describes the observed increase in average IQ scores over time, which has been documented across many countries and cultures.",
              dsR1: "The Flynn effect refers to the gradual increase in average IQ scores observed over the 20th century, a phenomenon that has been documented worldwide.",
              sonnet3_5:
                "The Flynn effect is the observed rise in average IQ scores across generations, a phenomenon that has been noted globally over the past century.",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Exam 2021",
        questions: [
          {
            id: 1,
            text: "What is the difference between norm-referenced and criterion-referenced tests?",
            options: [
              "Norm-referenced tests compare to a standard, criterion-referenced to a population",
              "Norm-referenced tests compare to a population, criterion-referenced to a standard",
              "They are the same thing",
              "Norm-referenced tests are only used in education, criterion-referenced in psychology",
            ],
            correctAnswer: 1,
            explanation:
              "Norm-referenced tests compare an individual's performance to a representative sample or population, while criterion-referenced tests compare performance to a specific standard or criterion.",
            llmAnswer: "Deepseek",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Norm-referenced tests compare an individual's score to the scores of a norm group, while criterion-referenced tests compare an individual's score to a predetermined standard or criterion.",
              dsR1: "Norm-referenced tests compare a test-taker's performance to that of a normative group, while criterion-referenced tests compare performance to a specific standard or criterion of mastery.",
              sonnet3_5:
                "Norm-referenced tests compare individual scores to the performance of a reference group, whereas criterion-referenced tests assess performance against a predefined standard.",
            },
          },
          {
            id: 2,
            text: "Which of the following is an example of a projective test?",
            options: [
              "Minnesota Multiphasic Personality Inventory (MMPI)",
              "Wechsler Adult Intelligence Scale (WAIS)",
              "Rorschach Inkblot Test",
              "Beck Depression Inventory (BDI)",
            ],
            correctAnswer: 2,
            explanation:
              "The Rorschach Inkblot Test is a classic example of a projective test, where individuals' responses to ambiguous stimuli are thought to reveal aspects of their personality.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Projective tests present ambiguous stimuli to elicit responses that are believed to reveal unconscious thoughts and feelings. The Rorschach Inkblot Test is a prime example of this type of test.",
              dsR1: "The Rorschach Inkblot Test is a well-known projective test where individuals interpret ambiguous inkblots, and their responses are analyzed to understand their personality and underlying psychological processes.",
              sonnet3_5:
                "The Rorschach Inkblot Test is a classic projective test that uses ambiguous inkblots to assess personality and underlying psychological dynamics.  The individual's interpretation of the inkblots is analyzed to gain insights into their personality.",
            },
          },
          {
            id: 3,
            text: "What does the term 'face validity' refer to in psychometric testing?",
            options: [
              "How well a test measures what it claims to measure",
              "How well a test predicts future behavior",
              "How much a test appears to measure what it claims to measure",
              "How consistent a test's results are over time",
            ],
            correctAnswer: 2,
            explanation:
              "Face validity refers to the extent to which a test appears to measure what it claims to measure, based on the subjective judgment of the test-takers or administrators.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Face validity refers to the superficial appearance of a test's validity. It assesses whether a test looks like it measures what it is intended to measure, based on the judgment of those taking or administering the test.",
              dsR1: "Face validity refers to the extent to which a test appears to measure what it is intended to measure, based on a subjective judgment of its appearance. It is a weak form of validity.",
              sonnet3_5:
                "Face validity is a subjective assessment of how well a test appears to measure what it is designed to measure. It is based on the judgment of those who take or administer the test and is not a strong indicator of true validity.",
            },
          },
          {
            id: 4,
            text: "Which type of validity is most concerned with how well a test predicts future performance or behavior?",
            options: ["Content validity", "Construct validity", "Concurrent validity", "Predictive validity"],
            correctAnswer: 3,
            explanation:
              "Predictive validity is concerned with how well a test predicts future performance or behavior, making it crucial for tests used in selection or placement contexts.",
            llmAnswers: {
              gptO1: "3",
              dsR1: "3",
              sonnet3_5: "3",
            },
            llmExplanations: {
              gptO1:
                "Predictive validity refers to the extent to which a test accurately predicts future performance or behavior.  It is a crucial aspect of validity for tests used in selection or placement decisions.",
              dsR1: "Predictive validity is the degree to which a test accurately predicts future outcomes or behaviors. This is particularly important for tests used in selection or placement contexts.",
              sonnet3_5:
                "Predictive validity assesses how well a test predicts future performance or behavior.  It is a key criterion for tests used in situations where forecasting future outcomes is essential.",
            },
          },
          {
            id: 5,
            text: "What is the purpose of factor analysis in psychometric test development?",
            options: [
              "To increase test reliability",
              "To identify underlying constructs or dimensions",
              "To compare different tests",
              "To standardize test scores",
            ],
            correctAnswer: 1,
            explanation:
              "Factor analysis is used in psychometric test development to identify underlying constructs or dimensions that explain the pattern of correlations within a set of observed variables.",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Factor analysis is a statistical method used to identify underlying latent variables or factors that explain the correlations among a set of observed variables in a psychometric test.",
              dsR1: "Factor analysis is a statistical technique used in psychometric test development to identify underlying constructs or dimensions that explain the relationships between observed variables.",
              sonnet3_5:
                "Factor analysis is a statistical method used to uncover underlying latent factors that explain the correlations among a set of observed variables in a psychometric test, aiding in test development and construct validation.",
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Clinical Psychology",
    quizzes: [
      {
        id: 1,
        title: "Exam 2022",
        questions: [
          {
            id: 1,
            text: "Which of the following is NOT a common treatment approach in clinical psychology?",
            options: [
              "Cognitive Behavioral Therapy",
              "Psychoanalysis",
              "Electroconvulsive Therapy",
              "Mindfulness-Based Stress Reduction",
            ],
            correctAnswer: 2,
            explanation:
              "While Electroconvulsive Therapy is a medical treatment for severe mental health conditions, it is not typically administered by clinical psychologists.",
            llmAnswer: "Claude",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Electroconvulsive therapy (ECT) is a medical procedure, typically administered by psychiatrists, not clinical psychologists.  The other options are common therapeutic approaches used in clinical psychology.",
              dsR1: "Electroconvulsive therapy (ECT) is a medical treatment, usually administered by psychiatrists, not clinical psychologists. CBT, psychoanalysis, and mindfulness-based stress reduction are all therapeutic approaches within the scope of clinical psychology.",
              sonnet3_5:
                "Electroconvulsive therapy (ECT) is a medical treatment, typically administered by psychiatrists, and not usually within the scope of practice for clinical psychologists. The other options are common therapeutic approaches used by clinical psychologists.",
            },
          },
          {
            id: 2,
            text: "What is the primary focus of cognitive-behavioral therapy (CBT)?",
            options: [
              "Exploring unconscious conflicts",
              "Changing maladaptive thoughts and behaviors",
              "Improving interpersonal relationships",
              "Uncovering repressed memories",
            ],
            correctAnswer: 1,
            explanation:
              "Cognitive-behavioral therapy (CBT) primarily focuses on identifying and changing maladaptive thoughts and behaviors to improve mental health and well-being.",
            llmAnswer: "OpenAI",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Cognitive Behavioral Therapy (CBT) focuses on the interplay between thoughts, feelings, and behaviors.  It aims to identify and modify maladaptive thought patterns and behaviors to improve mental health.",
              dsR1: "The core of Cognitive Behavioral Therapy (CBT) is to identify and change negative or unhelpful thought patterns and behaviors that contribute to psychological distress.",
              sonnet3_5:
                "Cognitive Behavioral Therapy (CBT) is a therapeutic approach that focuses on the connection between thoughts, feelings, and behaviors. It aims to help individuals identify and change maladaptive thought patterns and behaviors.",
            },
          },
          {
            id: 3,
            text: "Which of the following is a key feature of person-centered therapy?",
            options: [
              "Directive approach",
              "Unconditional positive regard",
              "Interpretation of dreams",
              "Behavioral reinforcement",
            ],
            correctAnswer: 1,
            explanation:
              "Unconditional positive regard, where the therapist accepts the client without judgment, is a key feature of person-centered therapy developed by Carl Rogers.",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Person-centered therapy, developed by Carl Rogers, emphasizes unconditional positive regard, empathy, and genuineness as core therapeutic elements.",
              dsR1: "Unconditional positive regard, a core component of person-centered therapy, involves the therapist accepting and valuing the client without judgment, fostering a safe and supportive therapeutic environment.",
              sonnet3_5:
                "Unconditional positive regard, a key element of person-centered therapy, is the therapist's acceptance and valuing of the client without conditions, creating a safe and trusting therapeutic relationship.",
            },
          },
          {
            id: 4,
            text: "What is the primary goal of exposure therapy in treating anxiety disorders?",
            options: [
              "To avoid anxiety-provoking stimuli",
              "To medicate anxiety symptoms",
              "To gradually confront feared stimuli",
              "To analyze childhood experiences",
            ],
            correctAnswer: 2,
            explanation:
              "The primary goal of exposure therapy is to gradually and systematically expose individuals to feared stimuli or situations, helping them overcome their anxiety.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Exposure therapy aims to reduce anxiety by gradually exposing individuals to feared stimuli or situations in a safe and controlled environment.",
              dsR1: "The goal of exposure therapy is to help individuals confront their fears and anxieties by gradually exposing them to feared stimuli or situations, leading to a reduction in anxiety symptoms.",
              sonnet3_5:
                "Exposure therapy systematically exposes individuals to feared stimuli or situations, helping them to overcome their anxiety by gradually habituating to those stimuli.",
            },
          },
          {
            id: 5,
            text: "Which of the following is NOT a common symptom of major depressive disorder?",
            options: [
              "Persistent sad mood",
              "Loss of interest in activities",
              "Hallucinations",
              "Changes in sleep patterns",
            ],
            correctAnswer: 2,
            explanation:
              "Hallucinations are not typically a symptom of major depressive disorder. They are more commonly associated with psychotic disorders like schizophrenia.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Hallucinations are more characteristic of psychotic disorders such as schizophrenia, not major depressive disorder.  The other options are common symptoms of major depressive disorder.",
              dsR1: "Hallucinations are not a typical symptom of major depressive disorder; they are more commonly associated with psychotic disorders.  The other options are common symptoms of depression.",
              sonnet3_5:
                "Hallucinations are not a typical symptom of major depressive disorder, but rather are more commonly associated with psychotic disorders. The other options are common symptoms of major depression.",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Exam 2021",
        questions: [
          {
            id: 1,
            text: "What is the primary difference between a psychologist and a psychiatrist?",
            options: [
              "Psychologists focus on behavior, psychiatrists on emotions",
              "Psychologists can prescribe medication, psychiatrists cannot",
              "Psychiatrists have medical degrees and can prescribe medication, psychologists typically cannot",
              "There is no difference",
            ],
            correctAnswer: 2,
            explanation:
              "The primary difference is that psychiatrists have medical degrees (M.D. or D.O.) and can prescribe medication, while psychologists typically have doctoral degrees in psychology (Ph.D. or Psy.D.) and focus on psychotherapy and psychological testing.",
            llmAnswer: "Deepseek",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Psychiatrists are medical doctors (MD or DO) who can prescribe medication, while psychologists typically hold doctoral degrees (PhD or PsyD) and focus on psychotherapy and psychological assessment.",
              dsR1: "The key difference is that psychiatrists are medical doctors who can prescribe medication, whereas psychologists typically have doctoral degrees in psychology and focus on therapy and assessment.",
              sonnet3_5:
                "Psychiatrists are medical doctors (MD or DO) who can prescribe medication, while psychologists typically hold doctoral degrees (PhD or PsyD) and focus on psychotherapy and psychological testing.",
            },
          },
          {
            id: 2,
            text: "Which of the following is a key principle of behavioral therapy?",
            options: [
              "Exploring unconscious conflicts",
              "Focusing on childhood experiences",
              "Emphasizing the here-and-now",
              "Using learning principles to change behavior",
            ],
            correctAnswer: 3,
            explanation:
              "Behavioral therapy is based on learning principles and focuses on changing observable behaviors rather than internal mental states.",
            llmAnswers: {
              gptO1: "3",
              dsR1: "3",
              sonnet3_5: "3",
            },
            llmExplanations: {
              gptO1:
                "Behavioral therapy utilizes principles of learning, such as classical and operant conditioning, to modify maladaptive behaviors.",
              dsR1: "Behavioral therapy focuses on observable behaviors and uses learning principles to change maladaptive behaviors. It emphasizes the present rather than the past.",
              sonnet3_5:
                "Behavioral therapy applies learning principles to modify observable behaviors. It emphasizes current behaviors and their environmental context rather than focusing on past experiences.",
            },
          },
          {
            id: 3,
            text: "What is the purpose of a mental status examination (MSE) in clinical psychology?",
            options: [
              "To diagnose specific mental disorders",
              "To assess cognitive functioning and mental state",
              "To determine medication dosage",
              "To predict future behavior",
            ],
            correctAnswer: 1,
            explanation:
              "The mental status examination (MSE) is used to assess a person's cognitive functioning and current mental state, including appearance, behavior, cognitive abilities, and emotional state.",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "A mental status examination (MSE) is a structured assessment of a person's cognitive functions and mental state, providing a snapshot of their current psychological functioning.",
              dsR1: "The mental status examination (MSE) is a clinical assessment tool used to evaluate a person's cognitive functions, emotional state, and overall mental status at a specific point in time.",
              sonnet3_5:
                "A mental status examination (MSE) is a structured assessment used to evaluate a person's current cognitive functions, emotional state, and overall mental status.",
            },
          },
          {
            id: 4,
            text: "Which of the following is NOT a type of cognitive distortion addressed in cognitive therapy?",
            options: ["All-or-nothing thinking", "Overgeneralization", "Magical thinking", "Catastrophizing"],
            correctAnswer: 2,
            explanation:
              "Magical thinking is not typically considered a cognitive distortion in cognitive therapy. The other options are common cognitive distortions addressed in this approach.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Magical thinking is not typically considered a cognitive distortion in cognitive therapy.  The other options are common cognitive distortions addressed in this approach.",
              dsR1: "While magical thinking can be a feature of some mental health conditions, it's not typically categorized as a cognitive distortion addressed directly in cognitive therapy. The other options are common cognitive distortions.",
              sonnet3_5:
                "Magical thinking is not usually considered a cognitive distortion addressed in cognitive therapy. The other options are common cognitive distortions that are frequently targeted in cognitive therapy.",
            },
          },
          {
            id: 5,
            text: "What is the primary focus of dialectical behavior therapy (DBT)?",
            options: [
              "Treating eating disorders",
              "Managing borderline personality disorder",
              "Addressing childhood trauma",
              "Treating obsessive-compulsive disorder",
            ],
            correctAnswer: 1,
            explanation:
              "Dialectical behavior therapy (DBT) was originally developed to treat borderline personality disorder, focusing on skills like mindfulness, interpersonal effectiveness, emotion regulation, and distress tolerance.",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Dialectical Behavior Therapy (DBT) was originally developed to treat borderline personality disorder, emphasizing skills training in mindfulness, emotion regulation, distress tolerance, and interpersonal effectiveness.",
              dsR1: "Dialectical Behavior Therapy (DBT) is a therapy primarily used to treat borderline personality disorder, focusing on skills training in mindfulness, emotion regulation, interpersonal effectiveness, and distress tolerance.",
              sonnet3_5:
                "Dialectical Behavior Therapy (DBT) is a therapeutic approach primarily used for borderline personality disorder, emphasizing the development of skills in mindfulness, emotion regulation, interpersonal effectiveness, and distress tolerance.",
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Social Context of Clinical Psychology",
    quizzes: [
      {
        id: 1,
        title: "Exam 2022",
        questions: [
          {
            id: 1,
            text: "How does cultural competence impact clinical psychology practice?",
            options: [
              "It's irrelevant to clinical practice",
              "It only matters in international settings",
              "It enhances the effectiveness of treatment",
              "It complicates the therapeutic process unnecessarily",
            ],
            correctAnswer: 2,
            explanation:
              "Cultural competence is crucial in clinical psychology as it enhances the effectiveness of treatment by ensuring that psychological services are sensitive and responsive to the cultural backgrounds of clients.",
            llmAnswer: "Claude",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Cultural competence is essential for effective clinical practice. It ensures that treatment is tailored to the client's cultural background and values, leading to improved outcomes.",
              dsR1: "Cultural competence is crucial in clinical psychology because it allows clinicians to provide culturally sensitive and effective care, improving the therapeutic relationship and treatment outcomes.",
              sonnet3_5:
                "Cultural competence is vital for effective clinical practice. It ensures that treatment is sensitive and responsive to the client's cultural background, enhancing the therapeutic relationship and improving treatment outcomes.",
            },
          },
          {
            id: 2,
            text: "What is the concept of 'intersectionality' in the context of clinical psychology?",
            options: [
              "The study of road intersections and their psychological impact",
              "The interconnected nature of social categorizations such as race, class, and gender",
              "The intersection of different psychological theories",
              "The point where two or more mental disorders overlap",
            ],
            correctAnswer: 1,
            explanation:
              "Intersectionality refers to the interconnected nature of social categorizations such as race, class, and gender, and how they create overlapping systems of discrimination or disadvantage.",
            llmAnswer: "OpenAI",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Intersectionality recognizes that social categorizations such as race, class, and gender are interconnected and create overlapping systems of discrimination or disadvantage.",
              dsR1: "Intersectionality is a framework that examines how various social categories, such as race, class, and gender, intersect and create unique experiences of discrimination and disadvantage.",
              sonnet3_5:
                "Intersectionality is a concept that highlights the interconnectedness of social categorizations like race, class, and gender, and how these overlapping systems create unique experiences of discrimination and marginalization.",
            },
          },
          {
            id: 3,
            text: "How does socioeconomic status potentially influence mental health outcomes?",
            options: [
              "It has no impact on mental health",
              "Lower socioeconomic status is always associated with better mental health",
              "Higher socioeconomic status guarantees good mental health",
              "Lower socioeconomic status is often associated with increased risk for mental health issues",
            ],
            correctAnswer: 3,
            explanation:
              "Lower socioeconomic status is often associated with increased risk for mental health issues due to factors such as increased stress, limited access to resources, and exposure to adversity.",
            llmAnswers: {
              gptO1: "3",
              dsR1: "3",
              sonnet3_5: "3",
            },
            llmExplanations: {
              gptO1:
                "Lower socioeconomic status is often associated with increased stress, limited access to resources, and exposure to adversity, all of which can increase the risk of mental health problems.",
              dsR1: "Socioeconomic status significantly impacts mental health. Lower socioeconomic status is often linked to increased stress, limited access to resources, and higher exposure to adverse life events, increasing the risk of mental health issues.",
              sonnet3_5:
                "Lower socioeconomic status is often associated with increased risk factors for mental health problems, such as increased stress, limited access to resources, and greater exposure to adversity.",
            },
          },
          {
            id: 4,
            text: "What is the primary goal of community psychology?",
            options: [
              "To focus solely on individual therapy",
              "To study and enhance the quality of life for individuals within communities",
              "To replace clinical psychology",
              "To conduct research without practical applications",
            ],
            correctAnswer: 1,
            explanation:
              "Community psychology aims to understand people in the context of their communities and to use this understanding to enhance quality of life through collaborative research and action.",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Community psychology focuses on understanding individuals within their community context and using that understanding to improve the quality of life for community members.",
              dsR1: "Community psychology aims to improve the well-being of individuals and communities by addressing social and environmental factors that influence mental health and quality of life.",
              sonnet3_5:
                "Community psychology focuses on understanding and improving the well-being of individuals and communities by addressing social and environmental factors that influence mental health and quality of life.",
            },
          },
          {
            id: 5,
            text: "How does stigma related to mental health impact treatment-seeking behavior?",
            options: [
              "It encourages people to seek treatment",
              "It has no effect on treatment-seeking",
              "It often prevents or delays people from seeking needed treatment",
              "It only affects certain demographic groups",
            ],
            correctAnswer: 2,
            explanation:
              "Mental health stigma often prevents or delays people from seeking needed treatment due to fear of judgment, discrimination, or negative social consequences.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Stigma surrounding mental health often prevents individuals from seeking help due to fear of judgment, discrimination, or social repercussions.",
              dsR1: "Mental health stigma significantly impacts help-seeking behavior.  The fear of judgment, discrimination, and social consequences often prevents or delays individuals from seeking necessary treatment.",
              sonnet3_5:
                "Stigma associated with mental health often discourages individuals from seeking help due to fear of judgment, discrimination, or negative social consequences, leading to delayed or forgone treatment.",
            },
          },
        ],
      },
      {
        id: 2,
        title: "Exam 2021",
        questions: [
          {
            id: 1,
            text: "What is the concept of 'social determinants of health' in relation to mental health?",
            options: [
              "The idea that social media determines mental health",
              "The conditions in which people are born, grow, live, work, and age that impact health",
              "The social skills necessary for good mental health",
              "The impact of social gatherings on mental well-being",
            ],
            correctAnswer: 1,
            explanation:
              "Social determinants of health refer to the conditions in which people are born, grow, live, work, and age, which can significantly impact both physical and mental health outcomes.",
            llmAnswer: "Deepseek",
            llmAnswers: {
              gptO1: "1",
              dsR1: "1",
              sonnet3_5: "1",
            },
            llmExplanations: {
              gptO1:
                "Social determinants of health encompass the conditions in which people are born, grow, live, work, and age, significantly influencing both physical and mental health outcomes.",
              dsR1: "Social determinants of health are the conditions in which people are born, grow, live, work, and age that affect their health, including mental health. These factors can significantly impact health outcomes.",
              sonnet3_5:
                "Social determinants of health are the circumstances in which people areborn, grow, live, work, and age, significantly influencing both physical and mental health outcomes.",
              dsR1: "Social determinants of health are the conditions in which people are born, grow, live, work, and age that affect their health, including mental health. These factors can significantly impact health outcomes.",
              sonnet3_5:
                "Social determinants of health are the circumstances in which people are born, grow, live, work, and age, significantly influencing both physical and mental health outcomes.",
            },
          },
          {
            id: 2,
            text: "How does the concept of 'acculturation' relate to mental health in immigrant populations?",
            options: [
              "It has no impact on mental health",
              "Higher acculturation always leads to better mental health",
              "The process of acculturation can lead to stress and mental health challenges",
              "Acculturation only affects first-generation immigrants",
            ],
            correctAnswer: 2,
            explanation:
              "The process of acculturation can lead to stress and mental health challenges as individuals navigate between their original culture and the new culture, potentially impacting their mental well-being.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Acculturation, the process of adapting to a new culture, can be stressful and lead to mental health challenges for immigrants as they navigate between their original culture and the new one.",
              dsR1: "The process of acculturation can be a significant source of stress for immigrants, potentially leading to mental health challenges as individuals adapt to a new cultural environment.",
              sonnet3_5:
                "Acculturation, the process of adapting to a new culture, can present significant challenges and stressors for immigrants, potentially impacting their mental well-being.",
            },
          },
          {
            id: 3,
            text: "What is 'cultural formulation' in clinical assessment?",
            options: [
              "Ignoring cultural factors in assessment",
              "A standardized approach that applies to all cultures",
              "Considering cultural factors in understanding a client's symptoms and experiences",
              "Using only assessment tools developed in the client's culture",
            ],
            correctAnswer: 2,
            explanation:
              "Cultural formulation involves considering cultural factors in understanding a client's symptoms and experiences. It helps clinicians provide more culturally sensitive and effective care.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Cultural formulation in clinical assessment involves considering the cultural context of a client's symptoms and experiences to provide more culturally sensitive and effective care.",
              dsR1: "Cultural formulation in clinical assessment is the process of understanding how cultural factors influence a client's symptoms, experiences, and help-seeking behavior. It's crucial for providing culturally competent care.",
              sonnet3_5:
                "Cultural formulation in clinical assessment involves considering cultural factors in understanding a client's symptoms, experiences, and help-seeking behavior, leading to more culturally sensitive and effective care.",
            },
          },
          {
            id: 4,
            text: "What is the 'social drift hypothesis' in relation to mental illness and socioeconomic status?",
            options: [
              "The idea that mental illness causes downward social mobility",
              "The theory that social media causes mental illness",
              "The concept that mental illness only affects higher socioeconomic classes",
              "The belief that mental illness is solely determined by social factors",
            ],
            correctAnswer: 0,
            explanation:
              "The social drift hypothesis suggests that individuals with mental illness may experience downward social mobility due to the impact of their condition on their ability to maintain employment and social relationships.",
            llmAnswers: {
              gptO1: "0",
              dsR1: "0",
              sonnet3_5: "0",
            },
            llmExplanations: {
              gptO1:
                "The social drift hypothesis proposes that individuals with mental illness may experience downward social mobility due to the challenges posed by their condition in maintaining employment and social connections.",
              dsR1: "The social drift hypothesis suggests that individuals with mental illness may experience a decline in socioeconomic status due to the difficulties associated with their illness, impacting their ability to work and maintain social relationships.",
              sonnet3_5:
                "The social drift hypothesis posits that individuals with mental illness may experience downward social mobility as a consequence of their illness, affecting their ability to maintain employment and social standing.",
            },
          },
          {
            id: 5,
            text: "How does 'structural competency' differ from 'cultural competency' in clinical psychology?",
            options: [
              "They are the same concept",
              "Structural competency focuses on individual cultural beliefs, while cultural competency focuses on societal structures",
              "Structural competency addresses how societal structures impact health, while cultural competency focuses on individual cultural beliefs",
              "Structural competency is only relevant in architectural psychology",
            ],
            correctAnswer: 2,
            explanation:
              "Structural competency goes beyond cultural competency by addressing how societal structures, policies, and institutions impact health outcomes and access to care, rather than focusing solely on individual cultural beliefs and practices.",
            llmAnswers: {
              gptO1: "2",
              dsR1: "2",
              sonnet3_5: "2",
            },
            llmExplanations: {
              gptO1:
                "Structural competency expands upon cultural competency by examining how societal structures, policies, and institutions influence health outcomes and access to care, going beyond individual cultural beliefs.",
              dsR1: "While cultural competency focuses on understanding individual cultural beliefs and practices, structural competency addresses how broader societal structures and systems impact health and access to care.",
              sonnet3_5:
                "Structural competency builds upon cultural competency by considering how societal structures, policies, and institutions shape health outcomes and access to care, going beyond individual-level cultural factors.",
            },
          },
        ],
      },
    ],
  },
]

