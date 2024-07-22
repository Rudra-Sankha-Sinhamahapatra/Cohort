import path from 'path';
import * as grpc from '@grpc/grpc-js';
import  { GrpcObject, ServiceClientConstructor } from "@grpc/grpc-js"
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './generated/a';
import { AddressBookServiceHandlers } from './generated/AddressBookService';
import { Status } from '@grpc/grpc-js/build/src/constants';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, './a.proto'));

const personProto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;


const PERSONS: any[] = [];

const server = new grpc.Server();


const handlers: AddressBookServiceHandlers =  {
    AddPerson: (call, callback) => {
      let person = {
        name: call.request.name,
        age: call.request.age
      }
      PERSONS.push(person);
      callback(null, person)
    },
    GetPersonByName: (call, callback) => {
      let person = PERSONS.find(x => x.name === call.request.name);
      if (person) {
        callback(null, person)
      } else {
        callback({
          code: Status.NOT_FOUND,
          details: "not found"
        }, null);
      }
    }
  }

server.addService(personProto.AddressBookService.service,handlers );


server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
});