package com.example.rabbitmq;

import org.springframework.amqp.core.*;
import org.springframework.stereotype.Service;

@Service
public record Sender(AmqpTemplate amqpTemplate) {

    /**
     * Sends messages via Topic exchange
     *
     * @param message
     */
    public void sendViaTopicExchange(String message) {
        // convertAndSend takes the exchange name, routing-key, and the message
        amqpTemplate.convertAndSend(ConnectionRabbit.topicExchangeName, "demo.test", message);
    }

    /**
     * sends messages via Headers exchange
     *
     * @param message
     */
    public void sendViaHeadersExchange(String message) {
        // creates a message object and set headers
        Message sysErrMsg = MessageBuilder.withBody(message.getBytes()).setHeader("testId", "123")
                .setHeader("anotherId", "another123").build();
        amqpTemplate.convertAndSend(ConnectionRabbit.headerExchangeName, "header.#", sysErrMsg);

    }

    /**
     * sends messages via Direct exchange
     *
     * @param message
     */
    public void sendViaDirectExchange(String message) {
        amqpTemplate.convertAndSend(ConnectionRabbit.directExchangeName, "direct", message);
    }

    /**
     * sends messages via Fanout exchange
     *
     * @param message
     */
    public void sendViaFanoutExchange(String message) {
        amqpTemplate.convertAndSend(ConnectionRabbit.fanoutExchangeName, " ", message);

    }
}

