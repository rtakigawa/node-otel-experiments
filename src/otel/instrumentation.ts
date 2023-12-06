import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { Resource } from "@opentelemetry/resources";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
import { PrismaInstrumentation } from "@prisma/instrumentation";

const resource = new Resource({
  [SemanticResourceAttributes.SERVICE_NAME]: "backend-service",
});

const traceExporter = new OTLPTraceExporter();

const instrumentations = [
  getNodeAutoInstrumentations({
    "@opentelemetry/instrumentation-fs": { enabled: false },
    "@opentelemetry/instrumentation-express": { enabled: true },
  }),
  new PrismaInstrumentation(),
];

const sdk = new NodeSDK({
  resource,
  traceExporter,
  instrumentations,
});

sdk.start();
