import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Feed from './src/Componentes/Feed';
import Estilos from './src/Componentes/Feed/estilos';


class app extends Component {
  render(){
      return(
        <View style = {Estilos.area_fundo}>
          <View style = {Estilos.area_header}>
            <TouchableOpacity>
              <Image style = {Estilos.area_logo}
              source = {require('./src/img/logo2.png')}
              resizeMode = 'contain'
              />
            </TouchableOpacity>
            <TouchableOpacity style = {Estilos.botoes_sup}>
              <Image style = {Estilos.area_botoes_sup}
              source = {require('./src/img/add.png')}
              resizeMode = 'contain'
              />
            </TouchableOpacity>
            <TouchableOpacity style = {Estilos.botoes_sup}>
              <Image style = {Estilos.area_botoes_sup}
              source = {require('./src/img/seg.png')}
              resizeMode = 'contain'
              />
            </TouchableOpacity> 
            <TouchableOpacity style = {Estilos.botoes_sup}>
              <Image style = {Estilos.area_botoes_sup}
              source = {require('./src/img/msg.png')}
              resizeMode = 'contain'
              />
            </TouchableOpacity>                    
        </View>
          <Feed/>

          <View style = {Estilos.area_feed}>
            <Text> Esta é a area do cabeçalho do insta</Text>
            <Text> Deve ficar dentro do componente View que apresenta a Area do fundo</Text>
          </View>

          <View style = {Estilos.area_footter}>
            <Text> </Text>
            <Text> </Text>
          </View>

          <Text>...</Text>
          <Text>Continuação da area de fundo</Text>
          <Text>...</Text>
        </View>         
      );
    }
  }

export default app;