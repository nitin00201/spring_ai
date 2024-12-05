package com.ai;

import com.ai.model.RequestString;
import org.springframework.ai.ollama.OllamaChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Scanner;

@RestController
@RequestMapping("/ai")
@CrossOrigin("*")
public class AlController {
    @Autowired
    private OllamaChatClient ollamaChatClient;


    @PostMapping("/prompt")
    public String promptResponse(@RequestBody RequestString requestString){
        requestString.setPrompt(requestString.getPrompt());
        String response = ollamaChatClient.call(requestString.getPrompt());
        return response;
    }
}
