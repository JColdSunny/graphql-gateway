import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { JSportModule } from "./jsport/jsport.module";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver
    }),
    JSportModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
