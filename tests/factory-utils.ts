import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  FeeToSetter,
  PairCreated,
  SetFeeTo,
  SetMigrator
} from "../generated/Factory/Factory"

export function createFeeToSetterEvent(
  user: Address,
  feeToSetter: Address
): FeeToSetter {
  let feeToSetterEvent = changetype<FeeToSetter>(newMockEvent())

  feeToSetterEvent.parameters = new Array()

  feeToSetterEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  feeToSetterEvent.parameters.push(
    new ethereum.EventParam(
      "feeToSetter",
      ethereum.Value.fromAddress(feeToSetter)
    )
  )

  return feeToSetterEvent
}

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  pair: Address,
  param3: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("param3", ethereum.Value.fromUnsignedBigInt(param3))
  )

  return pairCreatedEvent
}

export function createSetFeeToEvent(user: Address, feeTo: Address): SetFeeTo {
  let setFeeToEvent = changetype<SetFeeTo>(newMockEvent())

  setFeeToEvent.parameters = new Array()

  setFeeToEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  setFeeToEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )

  return setFeeToEvent
}

export function createSetMigratorEvent(
  user: Address,
  migrator: Address
): SetMigrator {
  let setMigratorEvent = changetype<SetMigrator>(newMockEvent())

  setMigratorEvent.parameters = new Array()

  setMigratorEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  setMigratorEvent.parameters.push(
    new ethereum.EventParam("migrator", ethereum.Value.fromAddress(migrator))
  )

  return setMigratorEvent
}
