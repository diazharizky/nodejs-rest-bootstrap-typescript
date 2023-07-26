import otel, { Span, Tracer } from '@opentelemetry/api'
import { trace } from '@opentelemetry/api'
import { repositories, modules } from '../interfaces'

export default class CreateArticleModule implements modules.CreateArticle {
  private userRepository: repositories.User
  private articleRepository: repositories.Article
  private tracer: Tracer

  constructor(
    userRepository: repositories.User,
    articleRepository: repositories.Article
  ) {
    this.userRepository = userRepository
    this.articleRepository = articleRepository
    this.tracer = trace.getTracer('CreateArticleModule')
  }

  async call(traceSpan: Span) {
    const ctx = otel.trace.setSpan(otel.context.active(), traceSpan)
    const span = this.tracer.startSpan('call', undefined, ctx)

    console.log('creating article...')

    span.end()
  }
}
