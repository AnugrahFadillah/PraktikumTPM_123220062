import 'package:flutter/material.dart';

class Homepage extends StatelessWidget {
  const Homepage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Homepage"), leading: Icon(Icons.menu)),
      body: SingleChildScrollView(
        child: Column(children: [Image.asset("assets/images/jebron.jpeg")]),
      ),
    );
  }
}
